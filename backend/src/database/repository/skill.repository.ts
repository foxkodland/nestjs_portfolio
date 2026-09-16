import { CreateSkillInput } from "@/modules/skill/dto/create-skill.input";
import { schema } from "../../prisma/db";
import { Skill } from "@/modules/skill/entities/skill.entity";


export const skillRepository = {
  async findById(id: number) {
    return await schema.Skill.where({ id }).first()
  },

  async findAll() {
    return await schema.Skill.orderBy(p => p.createdAt.desc()).all()
  },

  async findByProfileId(profileId: number) {
    const connections = await schema.ProfilesSkills
      .where((x) => x.profileId.eq(profileId))
      .include("skill")
      .all();
    return connections.map((conn) => conn.skill) as unknown as Skill[];
  },

  async create(data: CreateSkillInput) {
    return await schema.Skill.create(data)
  },

  async update(id: number, data: Partial<CreateSkillInput>) {
    return await schema.Skill.where({ id }).update(data)
  },

  async delete(id: number) {
    return await schema.Skill.where({ id }).delete()
  },
};
