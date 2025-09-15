import { Inject, Injectable, Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { KeyObject } from "crypto";
import Redis from "ioredis";
import { PrismaService } from "src/prisma/prisma.service";

const FIFTEEN_DAYS = 24 * 60 * 60 * 15 // 15days

@Injectable()
export class TaskService {
	private readonly logger = new Logger(TaskService.name)

	constructor(
		private readonly prismaService: PrismaService,
		@Inject('IORedis') private redis: Redis
	) { }

	@Cron('0 0 0 * * *')
	async handleCron() {
		// delete account after deleted 15days
		await this.prismaService.user.deleteMany({
			where: {
				deleteAt: {
					lt: String(FIFTEEN_DAYS)
				}
			}
		})
	}

	@Cron('*/1 * * * *')
	async handleSyncToDb() {
		this.logger.log('Syncing post views to db')

		const stream = this.redis.scanStream({
			match: 'postViews:*', // get all key have postViews:postId
			count: 100
		})

		for await (const keys of stream) {
			for (const key of keys) {
				const postId = key.split('postViews:')
				const delta = Number(await this.redis.get(key))

				if (delta > 0) {
					await this.prismaService.post.update({
						where: { id: postId },
						data: { numberViews: { increment: delta } }
					})
				}

				await this.redis.set(key, 0) // set new cache
				this.logger.log(`Synced post ${postId} +${delta} views`);
			}
		}

	}

}