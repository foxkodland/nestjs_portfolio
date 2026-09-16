import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProfileSkillService } from './profile-skill.service';
import { ProfileSkill } from './entities/profile-skill.entity';
import { CreateProfileSkillInput } from './dto/create-profile-skill.input';
import { UpdateProfileSkillInput } from './dto/update-profile-skill.input';

@Resolver(() => ProfileSkill)
export class ProfileSkillResolver {
  constructor(private readonly profileSkillService: ProfileSkillService) {}

  @Mutation(() => ProfileSkill)
  createProfileSkill(@Args('createProfileSkillInput') createProfileSkillInput: CreateProfileSkillInput) {
    return this.profileSkillService.create(createProfileSkillInput);
  }

  @Query(() => [ProfileSkill], { name: 'profileSkill' })
  findAll() {
    return this.profileSkillService.findAll();
  }

  @Query(() => ProfileSkill, { name: 'profileSkill' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.profileSkillService.findOne(id);
  }

  @Mutation(() => ProfileSkill)
  updateProfileSkill(@Args('updateProfileSkillInput') updateProfileSkillInput: UpdateProfileSkillInput) {
    return this.profileSkillService.update(updateProfileSkillInput.id, updateProfileSkillInput);
  }

  @Mutation(() => ProfileSkill)
  removeProfileSkill(@Args('id', { type: () => Int }) id: number) {
    return this.profileSkillService.remove(id);
  }
}
