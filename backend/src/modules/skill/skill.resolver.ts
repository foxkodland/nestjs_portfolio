import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { SkillService } from './skill.service.js';
import { Skill } from './entities/skill.entity.js';
import { CreateSkillInput } from './dto/create-skill.input.js';
import { UpdateSkillInput } from './dto/update-skill.input.js';
import { Profile } from '../profile/entities/profile.entity.js';
import { profileRepository } from '@/database/repository/profile.repository';


@Resolver(() => Skill)
export class SkillResolver {
  constructor(private readonly skillService: SkillService) {}

  @Mutation(() => Skill)
  async createSkill(@Args('createSkillInput') createSkillInput: CreateSkillInput) {
    return await this.skillService.create(createSkillInput);
  }

  @Query(() => [Skill], { name: 'skills' })
  async findAll() {
    return await this.skillService.findAll();
  }

  @Query(() => Skill, { name: 'skill' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.skillService.findOne(id);
  }

  @Mutation(() => Skill)
  async updateSkill(@Args('updateSkillInput') updateSkillInput: UpdateSkillInput) {
    return await this.skillService.update(updateSkillInput.id, updateSkillInput);
  }

  @Mutation(() => Skill)
  async removeSkill(@Args('id', { type: () => Int }) id: number) {
    return await this.skillService.remove(id);
  }

  @ResolveField(() => [Profile], { name: 'profiles' })
  async getSkills(@Parent() skill: Skill) {
    return await profileRepository.findByProfiSkillId(skill.id) 
  }
}
