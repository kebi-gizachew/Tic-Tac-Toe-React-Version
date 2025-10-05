import checkWinner from './checkWinner.js';
function clicked(index,square,xTurn,setxTurn,setSquare){
    if (square[index]!==null) return
    const sqr=[...square];
    sqr[index]=xTurn?'X':'O';
    setSquare(sqr);
    if (checkWinner(sqr)){
        return "Winner is " + (xTurn ? 'X' : 'O');
    }else{
        setxTurn(!xTurn);
return "Turn for " + (!xTurn ? 'X' : 'O');
}
}
export default clicked;