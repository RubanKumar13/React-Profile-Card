import { useEffect, useState } from 'react'
import './Advice.css'

function Advice() {
    const [advice,setAdvice]= useState("");
    const[count,setCount] =useState("0");
    async function getAdvice(){
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        setAdvice(data.slip.advice);
        setCount((e)=> e+1);
    }
   
    useEffect(function () {
       getAdvice();
    },[]);
  return (
    <>
    <div className='container'>
        <h1>Get Advice</h1>
        <h3>{advice}</h3>
        <button onClick={getAdvice}>Click Me</button>
        <p>You Get <b>{count}</b> advice Today!!!</p>
    </div>
    </>

  )
}

export default Advice