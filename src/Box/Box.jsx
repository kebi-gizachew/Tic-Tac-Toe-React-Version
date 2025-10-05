import checkWinner from '../js/checkWinner'
import './Box.css'
import clicked from '../js/clicked'
function Box(props) {
    return(
        <div className="box">
            <button className='btn' onClick={()=>{
                if (props.square[props.index]) return;
                if(!checkWinner(props.square)){
                    const newSquare = [...props.square]
                    newSquare[props.index] = props.xTurn ? "X" : "O";
                    props.setSquare(newSquare)
                    const msg = clicked(
            props.index,
            props.square,
            props.xTurn,
            props.setxTurn,
            props.setSquare
      );                    
                    if (props.onclick){
                    props.onclick(msg);
                    }
                }
            }}>{props.item}</button>
        </div>
    )

}
export default Box;