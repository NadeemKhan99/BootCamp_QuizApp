import React from 'react';

export type QuizType = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type QuestionType = {
    question: string
    correct_answer: string
    options: string[]
}

export type userAnswer = {
    answers: string[]
}
export type showResult ={
    question : string[]
    correct : []
    options: string[][]
}

export type propsType = {
    question: string
    options: string[]
    callback: (e:React.FormEvent<EventTarget>,ans:string)=>void
}

export type resultType = {
    result1: number
    total: number
    totaldata: QuestionType[]
    userans:string[]
}

export type modeType = {
    ques: number
    mode: string
}
