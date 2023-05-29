
import React, { useState } from "react";
import './../styles/App.css';
import Tooltip1 from "./Tooltip1";
import Tooltip2 from "./Tooltip2";

const App = () => {
  const [text1,setText1] = useState('This is a tooltip');
  const [text2,setText2] = useState('This is a another tooltip');
  return (
    <div>
         <Tooltip1 text1={text1} >
            <div><h1>Hover on me</h1></div><br/>
         </Tooltip1><br/><br/>
         <Tooltip2 text2={text2} >
            <div><h1>Hover on me to see another tooltip</h1></div><br/>
         </Tooltip2>
         
         
    </div>
  )
}

export default App
