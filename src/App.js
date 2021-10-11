import React from "react"
import MyButton from "./components/MyButton/MyButton"
import MyInput from "./components/MyInput/MyInput"
function App(){
    return (
      <div class="container">
       
          <MyInput className="Input_100" ></MyInput>
          <li >
            <MyButton className="MyButtonOk" id="ok">Okey </MyButton>
            <MyButton className="MyButtonCancel" id="cancel">Cancel </MyButton>
         </li>
      </div>
      
    );
 
}
/* let el1 = document.getElementById("ok");
let el2 = document.getElementById("cancel");
el1.addEventListener(('click'),function(){
  console.log('okey');
})
el2.addEventListener(('click'),function(){
  console.log('cancel');
}) */

export default App;
