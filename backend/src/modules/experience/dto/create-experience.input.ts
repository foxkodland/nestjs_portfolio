import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateExperienceInput {
  @Field(() => String, { description: 'name' })
  company!: string;

  @Field(() => String, { description: 'position' })
  position!: string;

  @Field(() => String, { description: 'description' })
  description!: string;

  @Field(() => Number, { description: 'FK для profile' })
  profile_id!: number;
}
