import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Experience {
  @Field(() => Number, { description: 'id' })
  id!: number;

  @Field(() => String, { description: 'name' })
  company!: string;

  @Field(() => String, { description: 'position' })
  position!: string;

  @Field(() => String, { description: 'description' })
  description!: string;
}
