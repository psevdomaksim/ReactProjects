import React from "react"
import MyButton from "./components/MyButton/MyButton"
import MyInput from "./components/MyInput/MyInput"
function App(){
    return (
      <div class="container">
       
          <MyInput className="Input_100" >Input something</MyInput>
          <li >
            <MyButton className="MyButtonOk" id="ok">Okey </MyButton >
            <MyButton className="MyButtonCancel" id="cancel"> Cancel</MyButton >
         </li>
      </div>
      
      
    );
    
 
}


export default App;
