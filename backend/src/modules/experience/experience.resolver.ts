import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ExperienceService } from './experience.service.js';
import { Experience } from './entities/experience.entity.js';
import { CreateExperienceInput } from './dto/create-experience.input.js';
import { UpdateExperienceInput } from './dto/update-experience.input.js';

@Resolver(() => Experience)
export class ExperienceResolver {
  constructor(private readonly experienceService: ExperienceService) {}

  @Mutation(() => Experience)
  async createExperience(@Args('createExperienceInput') createExperienceInput: CreateExperienceInput) {
    return await this.experienceService.create(createExperienceInput);
  }

  @Query(() => [Experience], { name: 'experiences' })
  async findAll() {
    return await this.experienceService.findAll();
  }

  @Query(() => Experience, { name: 'experience' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.experienceService.findOne(id);
  }

  @Mutation(() => Experience)
  async updateExperience(@Args('updateExperienceInput') updateExperienceInput: UpdateExperienceInput) {
    return await this.experienceService.update(updateExperienceInput.id, updateExperienceInput);
  }

  @Mutation(() => Experience)
  async removeExperience(@Args('id', { type: () => Int }) id: number) {
    return await this.experienceService.remove(id);
  }
}
