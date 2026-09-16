import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class ProfileSkillInput {
  @Field(() => Number, { description: 'FK - profile' })
  @IsNotEmpty({ message: "Поле profileId не может быть пустым" })
  @IsNumber()
  profileId: number;

  @Field(() => Number, { description: 'FK - skill' })
  @IsNotEmpty({ message: "Поле skillId не может быть пустым" })
  @IsNumber()
  skillId: number;
}
