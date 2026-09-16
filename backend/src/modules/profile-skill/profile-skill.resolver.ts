import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProfileSkillService } from './profile-skill.service';
import { ProfileSkill } from './entities/profile-skill.entity';
import { ProfileSkillInput } from './dto/create-profile-skill.input';


@Resolver(() => ProfileSkill)
export class ProfileSkillResolver {
  constructor(private readonly profileSkillService: ProfileSkillService) {}

  @Mutation(() => ProfileSkill)
  createProfileSkill(@Args('profileSkillInput') profileSkillInput: ProfileSkillInput) {
    return this.profileSkillService.create(profileSkillInput);
  }

  @Query(() => [ProfileSkill], { name: 'profileSkills' })
  findAll() {
    return this.profileSkillService.findAll();
  }

  @Query(() => ProfileSkill, { name: 'profileSkill' })
  findOne(@Args('profileSkillInput') profileSkillInput: ProfileSkillInput) {
    return this.profileSkillService.findOne(profileSkillInput);
  }

  @Mutation(() => ProfileSkill)
  removeProfileSkill(@Args('profileSkillInput') profileSkillInput: ProfileSkillInput) {
    return this.profileSkillService.remove(profileSkillInput);
  }
}
