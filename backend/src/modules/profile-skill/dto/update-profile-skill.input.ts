import { CreateProfileSkillInput } from './create-profile-skill.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProfileSkillInput extends PartialType(CreateProfileSkillInput) {
  @Field(() => Int)
  id: number;
}
