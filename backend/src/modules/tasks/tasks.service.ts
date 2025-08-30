import { Injectable, Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { PrismaService } from "src/prisma/prisma.service";

const FIFTEEN_DAYS = 24 * 60 * 60 * 15 // 15days

@Injectable()
export class TaskService {
	private readonly logger = new Logger(TaskService.name)

	constructor(
		private readonly prismaService: PrismaService
	) {

	}

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

}