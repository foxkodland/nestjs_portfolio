import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProfileSkillInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
