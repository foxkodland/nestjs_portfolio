import { ObjectType, Field } from '@nestjs/graphql';
import { Experience } from '@/modules/experience/entities/experience.entity';


@ObjectType()
export class Profile {
  @Field(() => Number, { description: 'id' })
  id!: number;

  @Field(() => String, { description: 'name' })
  name!: string;

  @Field(() => String, { description: 'description' })
  description!: string;

  @Field(() => [Experience], { nullable: 'itemsAndList', description: 'Опыт с предыдущих работ' })
  experience?: Experience[];
}
