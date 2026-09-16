import { Injectable } from '@nestjs/common';
import { ProfileSkillInput } from './dto/create-profile-skill.input';
import { profileSkillRepository } from '@/database/repository/profile-skill.repository';


@Injectable()
export class ProfileSkillService {
  async create(data: ProfileSkillInput) {
    return await profileSkillRepository.create(data)
  }

  async findAll() {
    return await profileSkillRepository.findAll()
  }

  async findOne(data: ProfileSkillInput) {
    return await profileSkillRepository.find(data)
  }

  async remove(data: ProfileSkillInput) {
    return await profileSkillRepository.delete(data)
  }
}
