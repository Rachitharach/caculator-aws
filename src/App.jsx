import { useState } from "react";
import React from "react";
import "./App.css";


function App() {
const [display, setdisplay] = useState("");

// function calculate(){
// const operators =["+","-","*","/"];
// const operator = operators.find(function(op){
//         return display.includes(op);
//       });

//   if (!operator) {
//     return;
//   }
 
// const[first , second] = display.split(operator);

// const num1 = Number(first);
// const num2 = Number(second);

// let result;

// switch (operator) {
//     case "+":
//     result = num1 + num2;
//     break;

//     case "-":
//     result = num1 - num2;
//     break;

//   case "*":
//     result = num1 * num2;
//     break;

//   case "/":
//     result = num1 / num2;
//     break;
// }
// setdisplay(result.toString());

// }


function calculate() {
  try {
    const result = eval(display);
    setdisplay(result.toString());
  } catch {
    setdisplay("Error");
  }
}


  return(

    <div className="calculator">
      <h2>Calculator</h2>
      <input type="text" className="display"  value={display} readOnly  />
      <div className="buttons">
        <button onClick={()=>setdisplay(display + "7")}>7</button>
        <button  onClick={()=>setdisplay(display + "8")}>8</button>
        <button  onClick={()=>setdisplay(display + "9")}>9</button>
        <button   onClick={()=>setdisplay(display + "/")}>/</button>
        <button   onClick={()=>setdisplay(display + "4")}>4</button>
        <button   onClick={()=>setdisplay(display + "5")}>5</button>
        <button   onClick={()=>setdisplay(display + "6")}>6</button>
        <button   onClick={()=>setdisplay(display + "*")}>*</button>
        <button  onClick={()=>setdisplay(display + "1")}>1</button>
        <button  onClick={()=>setdisplay(display + "2")}>2</button>
        <button   onClick={()=>setdisplay(display + "3")}>3</button>
        <button   onClick={()=>setdisplay(display + "-")}>-</button>
        
        <button  onClick={()=>setdisplay( " ")}>C</button>
        <button  onClick={()=>setdisplay(display + "0")}>0</button>
        <button onClick={calculate}>=</button>
        <button  onClick={()=>setdisplay(display + "+")}>+</button>

      </div>
    </div>
  
  );
}

export default App;