import { schema } from "../../prisma/db";
import { CreateProfileInput } from "@/modules/profile/dto/create-profile.input";


export const profileRepository = {
  async findById(id: number) {
    return await schema.Profile.where({ id }).first()
  },

  async findMany() {
    return await schema.Profile.orderBy(p => p.createdAt.desc()).all()
  },

  async create(data: CreateProfileInput) {
    return await schema.Profile.create(data)
  },

  async update(id: number, data: Partial<CreateProfileInput>) {
    return await schema.Profile.where({id}).update(data)
  },

  async delete(id: number) {
    return await schema.Profile.where({id}).delete()
  },
};
