import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux"
import {increment} from "./features/counter.js"
import {decrement} from "./features/counter.js"
import {incrementByAmount} from "./features/counter.js"
import {decrementByAmount} from "./features/counter.js"
import {useState} from "react"

import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


function App() {
  
  const [amount, setAmount] = useState(0)
  //Update state using the method dispatch
  const dispatch = useDispatch()
  const {value} = useSelector((store) =>store.counter)
 
  const [interest, setInterest] = useState(1.05)
  const [charges, setCharges] = useState(0.85)
  
  //setAmount by using the method dispatch to update the amount by adding an amount through user input
  function click(e){
    e.preventDefault()
console.log(e)
console.log(e.target.value)

dispatch(incrementByAmount(Number(amount)))
setAmount(0)

  }
  //setAmount by using the method dispatch to update the amount by subtracting an amount through user input
  function handleClick(e){
    e.preventDefault()
console.log(e)
console.log(e.target.value)

dispatch(decrementByAmount(Number(amount)))
setAmount(0)

  }

  

  return (
    <Container className ="container">
    <Card className="App bg-dark">
      <h1 style={{ color: "white" }}>Current Balance: R{value} </h1>
      
      
      <form >
        <label style={{ color: "white" }} className ="value" > Value: 
      <input type="text" id="amount" name="balance" value={amount} onChange={(e) => setAmount(e.target.value)}  />
      <div className ="initial">
      <Button style={{ border: "2px solid white" }} className="handle bg-success" onClick={click} >Deposit</Button>
      <Button style={{ border: "2px solid white" }} className="bg-danger draw" onClick={handleClick} >Withdraw</Button>
      <Button style={{ border: "2px solid white" }} className ="bg-warning five" onClick={() => dispatch(increment(interest))}>Add Interest</Button>
      <Button style={{ border: "2px solid white" }} className="charge bg-info" onClick={() => dispatch(decrement(charges))}>Charges</Button>
      
      </div>
      </label>
      </form>
      
    </Card>
    </Container>
  );
}

export default App;

