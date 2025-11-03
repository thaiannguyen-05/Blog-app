import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { $Enums, Gender, User } from 'prisma/generated/prisma';

registerEnumType(Gender, {
  name: 'Gender',
});

@ObjectType()
export class UserQl implements Partial<User> {
  @Field()
  id: string;

  @Field({
    nullable: true,
  })
  name?: string;

  @Field({
    nullable: true,
  })
  gender: Gender;

  @Field({
    nullable: true,
  })
  dateOfBirth?: Date;

  @Field({
    nullable: true,
  })
  avtUrl?: string;
}
