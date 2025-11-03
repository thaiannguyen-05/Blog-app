import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserQl } from './entities/user.entity';
import { UserService } from './user.service';
import { FindUserByName } from './dto/FindUserByName';

@Resolver(() => UserQl)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserQl)
  async getProfile(@Args('userId', { type: () => String }) userId: string) {
    return this.userService.getFrolife(userId);
  }
}
