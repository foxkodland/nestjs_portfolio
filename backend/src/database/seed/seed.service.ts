import { schema } from '@/prisma/db';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { seedData } from './seed.data';


@Injectable()
export class SeedService implements OnApplicationBootstrap {
  private readonly schema = schema;

  // при запуске NestJS
  async onApplicationBootstrap() {
    await this.seedData();
  }

  private async seedData() {

    // для тестов очищение БД
    await this.schema.Experience.where((x) => x.id.gt(0)).deleteAll()
    await this.schema.Skill.where((x) => x.id.gt(0)).deleteAll()
    await this.schema.Project.where((x) => x.id.gt(0)).deleteAll()
    await this.schema.Profile.where((x) => x.id.gt(0)).deleteAll()
    await this.schema.ProfilesSkills.where((x) => x.profileId.gt(0)).deleteAll()
    console.log("БД очищена")
    
    // Простая проверка, что база пуста по наличию одного профиля
    const { total } = await this.schema.Profile.aggregate((a) => ({ total: a.count() }));
    if (total > 0) {
      return;
    }

    // записать юзера
    const user = await this.schema.Profile.create(seedData.profile);

    // записать скилы
    const skillsList = seedData.skills.map(skill => ({ name: skill }))
    const skillsObj = await this.schema.Skill.createAll(skillsList)

    // записать many-to-many profile-skill
    const mapSkillId = skillsObj.reduce((acc, skillObj) => {
      acc[skillObj.name] = skillObj.id;
      return acc;
    }, {} as Record<string, number>);

    const mySkillsList = seedData.mySkills.flatMap(skill => {
      if (skill in mapSkillId) {
        return [{ profileId: user.id, skillId: mapSkillId[skill] }];
      }
      return [];
    });

    await this.schema.ProfilesSkills.createAll(mySkillsList)

    // записать опыт
    const experienceWithProfileId = seedData.experiences.map(exp => ({ ...exp, profile_id: user.id }));
    await this.schema.Experience.createAll(experienceWithProfileId)

    // записать проекты
    const projectsWithProfileId = seedData.projects.map(project => ({ ...project, profile_id: user.id }));
    await this.schema.Project.createAll(projectsWithProfileId)
  }
}
