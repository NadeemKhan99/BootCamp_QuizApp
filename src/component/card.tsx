import React, { useState } from 'react';
import './../App.css';
import { propsType } from './../types/quiztypes'


const Card: React.FC<propsType> = ({ question, options, callback }) => {

    let [choice, setchoice] = useState<string>("");

    const handleselection = (e: any) => {
        setchoice(e.target.value);
    }

    return (
        <div className="container">
            <h3>
                {question}
            </h3>
            <form onSubmit={(e) => callback(e, choice)}>
                {options.map((data: string, ind: number) => {
                    return (
                        <div key={ind}>
                            <label>
                                <input className="opt" type="radio" required checked={data === choice} onChange={handleselection} name="opt" value={data} />
                                {data}
                            </label>
                        </div>
                    )
                })}
                <input className="btn_submit" type="submit" value="Submit" />
            </form>
        </div >
    )
}

export default Card;