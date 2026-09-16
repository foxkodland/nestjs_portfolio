import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ProfileSkill {
  @Field(() => Int, { description: 'FK - profile' })
  profileId: number;

  @Field(() => Int, { description: 'FK - skill' })
  skillId: number;
}
