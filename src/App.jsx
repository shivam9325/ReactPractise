import { useState } from "react";
import "./App.css";

function App() {
  //let counter=15;
  const [counter, setCounter] = useState(15);
  const [message, setMessage] = useState(' ')

  const AddValue = () => {
    //console.log("clicked");
    if (counter < 20) {
      setCounter(counter + 1);
      setMessage(' ');
        }
    else{
      setMessage(" value cannot be grater than 20")
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setMessage(' ');
    }
    else{
      setMessage(" value cannot be less than 0")
    }
  };

  return (
    <>
      <h1>HII I am Shivam</h1>
      <p>{counter}</p>
      {message && <p style={{ color: 'red' }}>{message}</p>}
      <button onClick={AddValue}> Add Value {counter}</button>
      <br></br>
      <br></br>
      <button onClick={removeValue}> Remove Value</button>

    </>
  );
}

export default App;
