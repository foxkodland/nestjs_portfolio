import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Profile {
  @Field(() => Number, { description: 'id' })
  id!: number;

  @Field(() => String, { description: 'name' })
  name!: string;

  @Field(() => String, { description: 'name' })
  description!: string;
}
