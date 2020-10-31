import React, { useState } from 'react';
import './../App.css';

import App from './../App'


const Front = () => {

    let [choice, setchoice] = useState<string>("");
    let [choice1, setchoice1] = useState<number>(0);
    let [bool1, setbool1] = useState(false);
    let [bool2, setbool2] = useState(false);
    let [bool3, setbool3] = useState(false);
    let [bool4,setbool4] = useState("hide");
    const arr: string[] = ["easy", "medium", "hard"];

    const handleselection = (e: any) => {
        setchoice(e.target.value);
        setbool1(true);
    }

    const handleselection1 = (e: any) => {
        if(e.target.value >=5 && e.target.value <=10)
        {
            setchoice1(e.target.value);
            setbool2(true);
            setbool4("hide");
        }
        else{
            setbool4("show");
        }

    }

    const handleselect = (e: any) => {
        if (bool1 && bool2) {
            setbool3(true);
        }
    }

    if (bool3) {
        return (
            <App ques={choice1} mode={choice} />
        )
    }


    return (
        <div className="container">

            <h1 className="title">
                Quiz App
            </h1>

            <label>
                <h4 className="label">
                    No of questions
                </h4>
                <input className="opt" type="number" autoFocus required onChange={handleselection1} placeholder="Range 5 to 10" />
                <h6 className={bool4}>Range must be from 5 to 10</h6>
                
            </label>
            <form onSubmit={handleselect}>
                <h4 className="label">
                    Mode
                </h4>
                {arr.map((data: string, ind: number) => {
                    return (
                        <div key={ind}>
                            <label>
                                <input className="opt" type="radio" required onChange={handleselection} name="opt" value={data} />
                                {data}
                            </label>
                        </div>
                    )
                })}
                <input className="btn_submit"  type="submit" value="Submit" />
            </form>
        </div >
    )
}

export default Front;