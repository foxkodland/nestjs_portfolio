import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProfileInput {
  @Field(() => String, { description: 'name' })
  name: string;

  @Field(() => String, { description: 'description' })
  description: string;
}
