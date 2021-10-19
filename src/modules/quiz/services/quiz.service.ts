import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatequizDto } from "../dto/createQuiz.Dto";
import { Quiz } from "../entities/quiz.entity";
import { QuizRepository } from "../repositories/quiz.repository";

@Injectable()
export class QuizService{
    constructor(@InjectRepository(QuizRepository)private quizRepository: QuizRepository, 
        ){

    }
    async getAllQuiz():Promise<Quiz[]>{
        return await this.quizRepository
        .createQueryBuilder('q')
        .leftJoinAndSelect('q.questions', 'qt')
        .getMany();
    }
    async getQuizById(id: number): Promise<Quiz>{
        return await this.quizRepository.findOne(id, {relations: ['questions']});
    }

    async createNewQuiz(quiz: CreatequizDto){
        return await this.quizRepository.save(quiz);
    }
}

