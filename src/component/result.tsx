import React from 'react';
import './../App.css';
import { resultType } from './../types/quiztypes'
import { QuestionType } from './../types/quiztypes'



const Result: React.FC<resultType> = ({ result1, total, totaldata, userans }) => {
    return (
        <div>
            <div className="container">
                <h2>Result</h2>
                <h5><span className="result">{result1}</span> out of <span className="total">{total}</span></h5>
            </div>
            <div className="resultshow">
                {totaldata.map((data: QuestionType, indi: number) => {
                    return (
                        <div key={indi}>
                            {/*----------------------------------- Questions---------------------------- */}
                            <h3>
                                {data.question}
                            </h3>
                            {data.options.map((option: string, index: number) => {

                                if (data.correct_answer === option) {
                                    return (
                                        <div key={index} id="showoption" className="correct">
                                            {option}
                                        </div>
                                    )
                                }

                                return (
                                    <div key={index} id="showoption" className={(data.correct_answer !== userans[indi] && userans[indi] === option) ? "false" : ""}>
                                        {option}
                                    </div>

                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Result;