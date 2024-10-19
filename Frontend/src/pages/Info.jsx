import React, {useState} from "react";
import axios from "axios";

function Info(){
    const [age,setAge] = useState('');
    const [std,setStd] = useState('');

    async function handleSubmit(e){
        e.preventdefault();
        console.log("Age: ", age, ", Std: ", std);
    }
    return(
        <>
            <label>Age</label><br/>
            <input type="number" /><br/>
            <label>Std</label><br/>
            <input type="text" />
        </>
    )
}
export default Info;