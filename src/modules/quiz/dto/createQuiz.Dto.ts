import { IsNotEmpty, Length } from "class-validator";

export class CreatequizDto{

    @IsNotEmpty({message:'This can not be empty'})
    @Length(3, 255)
    title:string;


    @IsNotEmpty()
    @Length(3)
    description:string;


}