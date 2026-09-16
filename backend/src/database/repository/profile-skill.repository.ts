import { schema } from "../../prisma/db";
import { ProfileSkillInput } from "@/modules/profile-skill/dto/create-profile-skill.input";


export const profileSkillRepository = {
  async find(data: ProfileSkillInput) {
    return await schema.ProfilesSkills.where(data).first()
  },

  async findAll() {
    return await schema.ProfilesSkills.orderBy(p => p.createdAt.desc()).all()
  },

  async create(data: ProfileSkillInput) {
    return await schema.ProfilesSkills.create(data)
  },

  async delete(data: ProfileSkillInput) {
    return await schema.ProfilesSkills.where(data).delete()
  },
};
