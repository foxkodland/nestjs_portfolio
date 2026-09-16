import { Injectable } from '@nestjs/common';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { projectRepository } from '@/database/repository/project.repository';


@Injectable()
export class ProjectService {
  async create(data: CreateProjectInput) {
    return await projectRepository.create(data)
  }

  async findAll() {
    return await projectRepository.findAll()
  }

  async findOne(id: number) {
    return await projectRepository.findById(id)
  }

  async update(id: number, data: UpdateProjectInput) {
    return await projectRepository.update(id, data)
  }

  async remove(id: number) {
    return await projectRepository.delete(id)
  }
}
