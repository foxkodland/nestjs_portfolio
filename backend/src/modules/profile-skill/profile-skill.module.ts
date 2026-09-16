import { Module } from '@nestjs/common';
import { ProfileSkillService } from './profile-skill.service';
import { ProfileSkillResolver } from './profile-skill.resolver';

@Module({
  providers: [ProfileSkillResolver, ProfileSkillService],
})
export class ProfileSkillModule {}
