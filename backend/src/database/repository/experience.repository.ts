import { CreateExperienceInput } from "@/modules/experience/dto/create-experience.input";
import { schema } from "../../prisma/db";
import { UpdateExperienceInput } from "@/modules/experience/dto/update-experience.input";


export const experienceRepository = {
  async findById(id: number) {
    return await schema.Experience.where({ id }).first()
  },

  async findManyByProfileId(id: number) {
    return await schema.Experience.where((x) => x.profile_id.eq(id)).orderBy(p => p.createdAt.desc()).all()
  },

  async findAll() {
    return await schema.Experience.orderBy(p => p.createdAt.desc()).all()
  },

  async create(data: CreateExperienceInput) {
    return await schema.Experience.create(data)
  },

  async update(id: number, data: Partial<UpdateExperienceInput>) {
    return await schema.Experience.where({id}).update(data)
  },

  async delete(id: number) {
    return await schema.Experience.where({id}).delete()
  },
};
