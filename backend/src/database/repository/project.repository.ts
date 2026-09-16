import { schema } from "../../prisma/db";
import { CreateProjectInput } from "@/modules/project/dto/create-project.input";
import { UpdateProjectInput } from "@/modules/project/dto/update-project.input";


export const projectRepository = {
  async findById(id: number) {
    return await schema.Project.where({ id }).first()
  },

  async findManyByProfileId(id: number) {
    return await schema.Project.where((x) => x.profile_id.eq(id)).orderBy(p => p.createdAt.desc()).all()
  },

  async findAll() {
    return await schema.Project.orderBy(p => p.createdAt.desc()).all()
  },

  async create(data: CreateProjectInput) {
    return await schema.Project.create(data)
  },

  async update(id: number, data: Partial<UpdateProjectInput>) {
    return await schema.Project.where({id}).update(data)
  },

  async delete(id: number) {
    return await schema.Project.where({id}).delete()
  },
};
