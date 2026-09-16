import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty, MinLength, MaxLength, IsNumber } from 'class-validator';


@InputType()
export class CreateProjectInput {
  @Field(() => String, { description: 'name' })
  @IsString({ message: 'Имя должно быть строкой' })
  @IsNotEmpty({ message: 'Имя не может быть пустым' })
  @MinLength(2, { message: 'Имя слишком короткое' })
  @MaxLength(100, { message: 'Имя слишком длинное' })
  name: string;

  @Field(() => String, { description: 'description' })
  @IsString({ message: 'Имя должно быть строкой' })
  @IsNotEmpty({ message: 'Имя не может быть пустым' })
  @MaxLength(3000, { message: 'Описание слишком длинное' })
  description: string;

  @Field(() => Number, { description: 'description' })
  @IsNumber({}, { message: 'profile_id должен быть числом' })
  @IsNotEmpty({ message: 'Поле не может быть пустым' })
  profile_id!: number;
}
