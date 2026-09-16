import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Profile } from '../profile/entities/profile.entity';
import { profileRepository } from '@/database/repository/profile.repository';


@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Mutation(() => Project)
  async createProject(@Args('createProjectInput') createProjectInput: CreateProjectInput) {
    return await this.projectService.create(createProjectInput);
  }

  @Query(() => [Project], { name: 'projects' })
  async findAll() {
    return await this.projectService.findAll();
  }

  @Query(() => Project, { name: 'project' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.projectService.findOne(id);
  }

  @Mutation(() => Project)
  async updateProject(@Args('updateProjectInput') updateProjectInput: UpdateProjectInput) {
    return await this.projectService.update(updateProjectInput.id, updateProjectInput);
  }

  @Mutation(() => Project)
  async removeProject(@Args('id', { type: () => Int }) id: number) {
    return await this.projectService.remove(id);
  }

  @ResolveField(() => Profile, { name: 'profile' })
  async getSkills(@Parent() project: Project) {
    return await profileRepository.findById(project.profile_id) 
  }
}
