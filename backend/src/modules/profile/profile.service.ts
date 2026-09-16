import { Injectable } from '@nestjs/common';
import { CreateProfileInput } from './dto/create-profile.input.js';
import { UpdateProfileInput } from './dto/update-profile.input.js';
import { profileRepository } from '@/database/repository/profile.repository';


@Injectable()
export class ProfileService {
  async create(profile: CreateProfileInput) {
    return await profileRepository.create(profile)
  }

  async findAll() {
    return await profileRepository.findMany()
  }

  async findOne(id: number) {
    return await profileRepository.findById(id)
  }

  async update(id: number, data: UpdateProfileInput) {
    return await profileRepository.update(id, data)
  }

  async remove(id: number) {
    return await profileRepository.delete(id)
  }
}
