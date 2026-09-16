import { Profile } from '@/modules/profile/entities/profile.entity';
import { ObjectType, Field } from '@nestjs/graphql';


@ObjectType()
export class Project {
  @Field(() => Number, { description: 'id' })
  id!: number;

  @Field(() => String, { description: 'name' })
  name!: string;

  @Field(() => String, { description: 'description' })
  description!: string;

  @Field(() => Number, { description: 'FK для profile' })
  profile_id!: number;

  // виртуальное поле для FK
  @Field(() => Profile)
  profile!: Profile;
}
