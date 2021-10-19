import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { QuizController } from './modules/quiz/controllers/quiz.controller';
import { QuizService } from './modules/quiz/services/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  typeOrmConfigAsync } from './config/typeorm.config';
import { QuizRepository } from './modules/quiz/repositories/quiz.repository';
import { QuestionRepository } from './modules/quiz/repositories/question.repository';
import { OptionRepository } from './modules/quiz/repositories/option.repository';
import { OptionController } from './modules/quiz/controllers/option.controller';
import { QuestionController } from './modules/quiz/controllers/question.controller';
import { QuestionService } from './modules/quiz/services/question.service';
import { OptionService } from './modules/quiz/services/option.service';

@Module({
  imports: [QuizModule,
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    TypeOrmModule.forFeature([QuizRepository,QuestionRepository, OptionRepository])
  ],
  controllers: [AppController, QuizController,OptionController, QuestionController],
  providers: [AppService, QuizService, QuestionService, OptionService],
})
export class AppModule {}
