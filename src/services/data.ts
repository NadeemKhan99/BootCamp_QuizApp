import {QuestionType,QuizType} from '../types/quiztypes'

const shuffle = (array:any[]) =>
    [...array].sort(()=>Math.random() - 0.5)

export const quiz_data = async(total:number,diff:string):Promise<QuestionType[]> =>{
    let data = await fetch(`https://opentdb.com/api.php?amount=${total}&difficulty=${diff}&type=multiple`);
    let {results} = await data.json();
    const quiz:QuestionType[] = results.map((questionObj:QuizType)=>{
        return{
            question : questionObj.question,
            correct_answer: questionObj.correct_answer,
            options: shuffle(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }
    })
    return quiz;
}

