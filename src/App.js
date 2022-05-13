import React,{useEffect, useState} from 'react'
import Dice from './components/Dice'
import './App.css';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'

function App() {
  const [tenzies, setTenzies] = useState(false)
  const [dice, setDice] = useState(getAllDice)

  function loadDiceValue(){
    return {
      id: nanoid(),
      value: (Math.floor(Math.random()*6)+1),
      isHeld: false
    }
  }
  function getAllDice() {
    const newArr = new Array(10).fill(0).map(() => loadDiceValue())
    return newArr
  }  
  
  useEffect(() => {
    const equalValues = dice.every(die => die.value === dice[0].value)
    const allIsHeld = dice.every(die => die.isHeld)
    if(equalValues && allIsHeld){
      setTenzies(true)
    }
  },[dice])

  function holdDice(id) {
    setDice(oldDice => oldDice.map((die) => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }

  function rollDice() {
    if(!tenzies){
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? die : loadDiceValue()
      }))
    }else {
      setTenzies(false)
      setDice(getAllDice())
    }
  }

  return (
    <main>
      {
        tenzies && <Confetti/>
      }
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. 
      Click each die to freeze it at its current value between rolls.</p>
      <div className='container'>
      {
        dice.map( die => <Dice key={die.id} id={die.id} 
          isHeld={die.isHeld} handleClick={holdDice} value={die.value}/>)
      }
      </div>
      <button onClick={rollDice} className='btn-primary'>{tenzies ? "Play Again" : "Roll"}</button>
    </main>
  );
}

export default App;
