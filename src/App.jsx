
import './App.css'
import Box from './Box/Box.jsx'
import clicked from './js/clicked.js'
import {useState} from 'react'
import Description from './Description/desc.jsx'
function App() {
  const [xTurn,setxTurn]=useState(true);
  const [square,setSquare] = useState(Array(9).fill(null));
  const [message, setMessage] = useState("Turn for X");
  function turnTeller(msg){
    if (msg) setMessage(msg);
  }
  return (
    <div className="main">
      <h1>Tic Tac Toe</h1>
      <div className="whole">
    <div className="App">
      <Box item={square[0]} square={square} setSquare={setSquare} index={0} setxTurn={setxTurn} xTurn={xTurn} onclick={turnTeller}/>
      <Box item={square[1]} square={square} setSquare={setSquare} index={1} setxTurn={setxTurn} xTurn={xTurn} onclick={turnTeller}/>
      <Box item={square[2]} square={square} setSquare={setSquare} index={2} setxTurn={setxTurn} xTurn={xTurn} onclick={turnTeller}/>
      <Box item={square[3]} square={square} setSquare={setSquare} index={3} setxTurn={setxTurn} xTurn={xTurn} onclick={turnTeller}/>
      <Box item={square[4]} square={square} setSquare={setSquare} index={4} setxTurn={setxTurn} xTurn={xTurn} onclick={turnTeller}/>
      <Box item={square[5]} square={square} setSquare={setSquare} index={5} setxTurn={setxTurn} xTurn={xTurn} onclick={turnTeller}/>
      <Box item={square[6]} square={square} setSquare={setSquare} index={6} setxTurn={setxTurn} xTurn={xTurn} onclick={turnTeller}/>
      <Box item={square[7]} square={square} setSquare={setSquare} index={7} setxTurn={setxTurn} xTurn={xTurn} onclick={turnTeller}/>
      <Box item={square[8]} square={square} setSquare={setSquare} index={8} setxTurn={setxTurn} xTurn={xTurn} onclick={turnTeller}/>
    </div>
     <div className='desc'>
      <Description message={message}/>
     </div>
     </div>
   </div>
  )
}

export default App
/**
 * function checkWinner(it checks if square is meeting the array)
 * function click(it checks if the position is taken and modifies the sqaure and check winner and write the turn and 
 * handles whose turn it is)
 * functiona turnTeller(it prints whose turn it is going to be and prints if their is a winner)
 * function that makes the 9 buttons
 * 
 */