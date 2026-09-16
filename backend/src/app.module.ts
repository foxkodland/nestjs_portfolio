import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ProfileModule } from './modules/profile/profile.module.js';
import { SkillModule } from './modules/skill/skill.module.js';
import { ExperienceModule } from './modules/experience/experience.module.js';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ProfileModule,
    SkillModule,
    ExperienceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
