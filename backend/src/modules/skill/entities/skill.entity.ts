import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Skill {
  @Field(() => Number, { description: 'id' })
  id!: number;

  @Field(() => String, { description: 'name' })
  name!: string;
}
