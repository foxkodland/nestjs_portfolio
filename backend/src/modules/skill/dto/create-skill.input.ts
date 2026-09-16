import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateSkillInput {
  @Field(() => String, { description: 'name skill' })
  @IsString({ message: 'Навык должен быть строкой' })
  @IsNotEmpty({ message: 'Навык не может быть пустым' })
  @MinLength(2, { message: 'Навык слишком короткий' })
  @MaxLength(100, { message: 'Навык слишком длинный' })
  name: string;
}
