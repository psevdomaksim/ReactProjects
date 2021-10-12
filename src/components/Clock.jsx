import { useEffect, useState } from "react";


const Clock = () => {
    
    const [state,setState] = useState({
        date: new Date()
    })
    useEffect(() =>timerUpdate(),[]) 
    const timerUpdate = () =>{
        setInterval(
                () => tick(),
            1000
            );
    }

    const tick = () =>{
        setState({
            date: new Date()
        });
    }


return(
    <div>
        <h1>здарова, джадж</h1>
        <h2>Сейчас {state.date.toLocaleTimeString()}.</h2>
    </div>
    );
}

 export default Clock;