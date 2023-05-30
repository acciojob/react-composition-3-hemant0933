
import React, { useState } from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";
// import Tooltip2 from "./Tooltip2";

const App = () => {
  const [text,setText] = useState('This is a tooltip');

  return (
    <div>
         <Tooltip text={text}>
            <h2 className="tooltip">This is a tooltip</h2>  
         </Tooltip><br/>
         <Tooltip text={text}>
           <p className="tooltip">Hover over me to see another tooltip</p>
         </Tooltip><br/>
         

          
    </div>
  )
}

export default App
