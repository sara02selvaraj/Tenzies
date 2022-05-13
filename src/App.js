import React,{useState} from 'react'
import Dice from './components/Dice'
import './App.css';

function App() {
  const [dice, setDice] = useState(getAllDice)

  function getAllDice() {
    const newArr = new Array(10).fill(0).map(() => Math.floor(Math.random()*6)+1)
    return newArr
  }
  function rollDice() {
    setDice(getAllDice)
  }

  return (
    <main>
      <div className='container'>
      {
        dice.map( die => <Dice value={die}/>)
      }
      </div>
      <button onClick={rollDice} className='btn-primary'>Roll</button>
    </main>
  );
}

export default App;
