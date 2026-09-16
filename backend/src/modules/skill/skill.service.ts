import { Injectable } from '@nestjs/common';
import { CreateSkillInput } from './dto/create-skill.input.js';
import { UpdateSkillInput } from './dto/update-skill.input.js';
import { skillRepository } from '@/database/repository/skill.repository';


@Injectable()
export class SkillService {
  async create(data: CreateSkillInput) {
    return await skillRepository.create(data)
  }

  async findAll() {
    return await skillRepository.findAll()
  }

  async findOne(id: number) {
    return await skillRepository.findById(id)
  }

  async update(id: number, data: UpdateSkillInput) {
    return await skillRepository.update(id, data)
  }

  async remove(id: number) {
    return await skillRepository.delete(id)
  }
}
