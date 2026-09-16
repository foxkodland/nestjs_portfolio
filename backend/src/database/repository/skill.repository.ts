import { CreateSkillInput } from "@/modules/skill/dto/create-skill.input";
import { schema } from "../../prisma/db";


export const skillRepository = {
  async findById(id: number) {
    return await schema.Skill.where({ id }).first()
  },

  async findMany() {
    return await schema.Skill.orderBy(p => p.createdAt.desc()).all()
  },

  async create(data: CreateSkillInput) {
    return await schema.Skill.create(data)
  },

  async update(id: number, data: Partial<CreateSkillInput>) {
    return await schema.Skill.where({id}).update(data)
  },

  async delete(id: number) {
    return await schema.Skill.where({id}).delete()
  },
};
