import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProfileService } from './profile.service.js';
import { Profile } from './entities/profile.entity.js';
import { CreateProfileInput } from './dto/create-profile.input.js';
import { UpdateProfileInput } from './dto/update-profile.input.js';


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
}
