import { Profile } from '@/modules/profile/entities/profile.entity';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Skill {
  @Field(() => Number, { description: 'id' })
  id!: number;

  @Field(() => String, { description: 'name' })
  name!: string;

  @Field(() => [Profile], { nullable: 'itemsAndList', description: 'Профили' })
  profiles?: Profile[];
}
