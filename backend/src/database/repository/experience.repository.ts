import { CreateExperienceInput } from "@/modules/experience/dto/create-experience.input";
import { schema } from "../../prisma/db";
import { CreateProfileInput } from "@/modules/profile/dto/create-profile.input";


export const experienceRepository = {
  async findById(id: number) {
    return await schema.Experience.where({ id }).first()
  },

  async findMany() {
    return await schema.Experience.orderBy(p => p.createdAt.desc()).all()
  },

  async create(data: CreateProfileInput) {
    return await schema.Experience.create(data)
  },

  async update(id: number, data: Partial<CreateExperienceInput>) {
    return await schema.Experience.where({id}).update(data)
  },

  async delete(id: number) {
    return await schema.Experience.where({id}).delete()
  },
};
