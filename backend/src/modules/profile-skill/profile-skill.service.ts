import { Injectable } from '@nestjs/common';
import { CreateProfileSkillInput } from './dto/create-profile-skill.input';
import { UpdateProfileSkillInput } from './dto/update-profile-skill.input';

@Injectable()
export class ProfileSkillService {
  create(createProfileSkillInput: CreateProfileSkillInput) {
    return 'This action adds a new profileSkill';
  }

  findAll() {
    return `This action returns all profileSkill`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profileSkill`;
  }

  update(id: number, updateProfileSkillInput: UpdateProfileSkillInput) {
    return `This action updates a #${id} profileSkill`;
  }

  remove(id: number) {
    return `This action removes a #${id} profileSkill`;
  }
}
