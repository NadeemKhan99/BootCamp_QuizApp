import React, { useState } from 'react';
import './App.css';
import { quiz_data } from './services/data';
import { useEffect } from 'react';
import { QuestionType } from './types/quiztypes'
import Card from './component/card'
import Result from './component/result'
import {modeType} from './types/quiztypes'


let App:React.FC<modeType> = ({ques,mode}) => {

  let [questions, quiz_data_set] = useState<QuestionType[]>([]);
  let [counter, counter_set] = useState<number>(0);
  let [result, setresult] = useState<number>(0);
  let [show, setshow] = useState(false);
  let [useranswer, setuseranswer] = useState<string[]>([]);

  

  useEffect(() => {
    async function data_show() {
      let real_data: QuestionType[] = await quiz_data(ques,mode);
      quiz_data_set(real_data);
    }
    data_show();
  }, []);

  if (!questions.length)
    return (<h1>Loading...</h1>)

  // --------------data transfer to show result--------------


  const handlesubmit = (e: React.FormEvent<EventTarget>, choice: string) => {
    e.preventDefault();

    if (questions[counter].correct_answer === choice)
      setresult(++result);
    setuseranswer([...useranswer,choice])


    if (counter <= questions.length - 2) {
      counter_set(++counter);
    }
    else {
      setshow(true);
    }
  }
  if (show) {
    return (
      <div>
        <Result result1={result} total={questions.length} totaldata={questions} userans={useranswer}/>
      </div>
    )
  }

    
  return (

    <div>
      <Card question={questions[counter].question} options={questions[counter].options} callback={handlesubmit} />
    </div>
  );
}

export default App;
