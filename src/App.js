/* eslint-disable no-eval */
import React,{ useState} from 'react'

const App = () => {
   const [input,setInput] = useState("");
  const [result,setResult] = useState(0);
  const handler = e =>{
    setInput(e.target.value);
  }
  return (
    <div>
      <center>
        <input data-testid="input" type="text" value={input} name="input" onChange={handler} />
        <br />
        <button onClick={() => setResult(eval(input))}>Result</button>
        <h4 data-testid='result'>Result is : {result}</h4>

        <button data-testid='button1' onClick={() => setInput(input+'1')}>1</button>
        <button data-testid='button2' onClick={() => setInput(input+'2')}>2</button>
        <button data-testid='button3' onClick={() => setInput(input+'3')}>3</button>
        <button data-testid='button4' onClick={() => setInput(input+'4')}>4</button>
        <button data-testid='button5' onClick={() => setInput(input+'5')}>5</button><br />
        
        <button data-testid='button6' onClick={() => setInput(input+'6')}>6</button>
        <button data-testid='button7' onClick={() => setInput(input+'7')}>7</button>
        <button data-testid='button8' onClick={() => setInput(input+'8')}>8</button>
        <button data-testid='button9' onClick={() => setInput(input+'9')}>9</button>
        <button data-testid='button0' onClick={() => setInput(input+'0')}>0</button><br />

        <button data-testid='buttonPlus' onClick={() => setInput(input+'+')}>+</button>
        <button data-testid='buttonSubtract' onClick={() => setInput(input+'-')}>-</button>
        <button data-testid='buttonMultiple' onClick={() => setInput(input+'*')}>*</button>
        <button data-testid='buttonDivide' onClick={() => setInput(input+'/')}>/</button>
        <button data-testid="clear" onClick={() => {setInput('');setResult(0)}}>clr</button><br /> 

      </center>
    </div>
  )
}

export default App
