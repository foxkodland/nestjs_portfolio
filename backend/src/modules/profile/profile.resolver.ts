import { Resolver, Query, Mutation, Args, Int, ResolveField, Root, Parent } from '@nestjs/graphql';
import { ProfileService } from './profile.service.js';
import { Profile } from './entities/profile.entity.js';
import { CreateProfileInput } from './dto/create-profile.input.js';
import { UpdateProfileInput } from './dto/update-profile.input.js';
import { Project } from '../project/entities/project.entity.js';
import { projectRepository } from '@/database/repository/project.repository';
import { Experience } from '../experience/entities/experience.entity.js';
import { experienceRepository } from '@/database/repository/experience.repository';
import { Skill } from '../skill/entities/skill.entity.js';
import { skillRepository } from '@/database/repository/skill.repository';


@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Mutation(() => Profile)
  async createProfile(@Args('createProfileInput') createProfileInput: CreateProfileInput) {
    return await this.profileService.create(createProfileInput);
  }

  @Query(() => [Profile], { name: 'profiles' })
  async findAll() {
    return await this.profileService.findAll();
  }

  @Query(() => Profile, { name: 'profile' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.profileService.findOne(id);
  }

  @Mutation(() => Profile)
  async updateProfile(@Args('updateProfileInput') updateProfileInput: UpdateProfileInput) {
    return await this.profileService.update(updateProfileInput.id, updateProfileInput);
  }

  @Mutation(() => Profile)
  async removeProfile(@Args('id', { type: () => Int }) id: number) {
    return await this.profileService.remove(id);
  }

  @ResolveField(() => [Project], { name: 'projects' })
  async getProjects(@Parent() profile: Profile) {
    return await projectRepository.findManyByProfileId(profile.id) 
  }

  @ResolveField(() => [Experience], { name: 'experiences' })
  async getExperiences(@Parent() profile: Profile) {
    return await experienceRepository.findManyByProfileId(profile.id) 
  }

  @ResolveField(() => [Skill], { name: 'skills' })
  async getSkills(@Parent() profile: Profile) {
    return await skillRepository.findByProfileId(profile.id) 
  }
}
