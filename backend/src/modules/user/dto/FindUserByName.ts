import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class FindUserByName {
  @Field(() => Int, { nullable: true })
  page?: number;

  @Field(() => Int, { nullable: true })
  limit?: number;

  @Field({ nullable: true })
  cursor?: string;
}
