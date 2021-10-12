import React,{useState}from "react";
import "./MyButton.css";


const Counter = (props) => {
    const [value,setValue] = useState(0)

    return (
        <>
         <h4>current number:  {value}</h4>
                      
             <button onClick ={()=>setValue(value+1)} className={props.className}>+ </button>
             <button onClick ={()=>setValue(value-1)} className={props.className}>-</button>

        </>
    
    )
}
export default Counter;