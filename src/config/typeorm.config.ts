import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Question } from 'src/modules/quiz/entities/question.entity';
import { Quiz } from 'src/modules/quiz/entities/quiz.entity';
import { Option } from 'src/modules/quiz/entities/option.entity';

export default class TypeOrmConfig {
  static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
    return {
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [Quiz, Question, Option],
        synchronize: true
    };
  }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
  inject: [ConfigService]
};

function DB_HOST(DB_HOST: any): string {
        throw new Error('Function not implemented.');
}


function DB_PORT(DB_PORT: any): number {
        throw new Error('Function not implemented.');
}


function DB_USERNAME(DB_USERNAME: any): string {
        throw new Error('Function not implemented.');
}


function DB_PASSWORD(DB_PASSWORD: any): string {
        throw new Error('Function not implemented.');
}


function DB_NAME(DB_NAME: any): string {
        throw new Error('Function not implemented.');
}
