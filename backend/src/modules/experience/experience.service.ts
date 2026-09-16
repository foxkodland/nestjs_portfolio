import { Injectable } from '@nestjs/common';
import { CreateExperienceInput } from './dto/create-experience.input.js';
import { UpdateExperienceInput } from './dto/update-experience.input.js';
import { experienceRepository } from '@/database/repository/experience.repository';


@Injectable()
export class ExperienceService {
  async create(data: CreateExperienceInput) {
    return await experienceRepository.create(data)
  }

  async findAll() {
    return await experienceRepository.findMany()
  }

  async findOne(id: number) {
    return await experienceRepository.findById(id)
  }

  async update(id: number, data: UpdateExperienceInput) {
    return await experienceRepository.update(id, data)
  }

  async remove(id: number) {
    return await experienceRepository.delete(id)
  }
}
