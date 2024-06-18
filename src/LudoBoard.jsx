import { useState } from "react";

function LudoBoard() {

    let [moves , setMoves] = useState(
        {
            blue: 0,
            red: 0,
            yellow: 0,
            green: 0
        }
    );

    let updateBlue = () => {
        setMoves((prevMoves) => {
            return {...prevMoves , blue: prevMoves.blue+ 1};
        });
    };

    let updateRed = () => {
        setMoves((prevMoves) => {
            return {...prevMoves , red: prevMoves.red+ 1};
        });
    };

    let updateYellow = () => {
        setMoves((prevMoves) => {
            return {...prevMoves , yellow: prevMoves.yellow+ 1};
        });
    };

    let updateGreen = () => {
        setMoves((prevMoves) => {
            return {...prevMoves , green: prevMoves.green+ 1};
        });
    };

    return (
        <div>
            <h3>Game Begins!</h3>
            <div className="board">
                <p>Blue Moves = {moves.blue}</p>
                <button style={{backgroundColor: "#20a4dc"}} onClick={updateBlue}>+1</button>
                <p>Red Moves = {moves.red}</p>
                <button style={{backgroundColor: "#e8445c"}} onClick={updateRed}>+1</button>
                <p>Yellow Moves = {moves.yellow}</p>
                <button style={{backgroundColor: "#f8cc04"}} onClick={updateYellow}>+1</button>
                <p>Green Moves = {moves.green}</p>
                <button style={{backgroundColor: "#28d474"}} onClick={updateGreen}>+1</button>
            </div>
        </div>
    );
}

export default LudoBoard;