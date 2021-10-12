import React from "react"
import "./MyInput.css"

const MyInput = (props) => {
    return(
        <input type="text" className={props.className} value={props.children}/>
       
       
    )

}

export default MyInput