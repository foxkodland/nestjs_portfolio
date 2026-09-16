import { ObjectType, Field } from '@nestjs/graphql';
import { Profile } from '@/modules/profile/entities/profile.entity';


@ObjectType()
export class Experience {
  @Field(() => Number, { description: 'id' })
  id!: number;

  @Field(() => String, { description: 'name' })
  company!: string;

  @Field(() => String, { description: 'position' })
  position!: string;

  @Field(() => String, { description: 'description' })
  description!: string;

  @Field(() => Number, { description: 'FK для profile' })
  profile_id!: number;

  // виртуальное поле для FK
  @Field(() => Profile)
  profile!: Profile;
}
