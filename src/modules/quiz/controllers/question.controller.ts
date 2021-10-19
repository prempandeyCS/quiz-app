import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQuestionDto } from "../dto/create-question.dto";
import { Question } from "../entities/question.entity";
import { QuestionService } from "../services/question.service";
import { QuizService } from "../services/quiz.service";

@Controller('question')
export class QuestionController{

    constructor(private questionService: QuestionService,
         private quizService: QuizService){}

         

    @Post('')
    @UsePipes(ValidationPipe)
    async saveQuestion(@Body() question: CreateQuestionDto):Promise<Question>{
        const quiz = await this.quizService.getQuizById(question.quizId);
        console.log({question, quiz})
        return await this.questionService.createQuestion(question, quiz)
    }
}