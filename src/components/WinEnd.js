// Imported react libraries
import React from "react";
// Called the "restartGame" function to be actioned once the button is clicked on. Returning the information.
const WinEnd = ({ restartGame }) => {
    return (
        <div className="centered">
            <h2>No luck? Want to Take Another Shot?</h2>
            <button className="restart-button" onClick={restartGame}>
                Try Again
            </button>
            <a className="quit-button" href="/">
                Quit Game
            </a>
        </div>
    );
};
// Exported WinEnd to WinBoard.
export default WinEnd;