// Imported react libraries and WinHeader component.
import React from 'react';
// Returning the information. Applied a class using a conditional operator below and added an "onClick" function to toggle the boolean function to true if the card is
// clicked on. Set up the "front face" of the card by populating the <img> area with the random card image from the array once the card is
// clicked on and flipped.
const WinCards = ({ id, name, flipped, clicked }) => {
    return (
        <div id="container">
            <div id="winCardsrow">
                <div onClick={() => (flipped ? undefined : clicked(name, id))}
                    className={
                        "card" + (flipped ? " flipped" : "")
                    }>
                    <div className="back"><img src="./images/back.png" alt="Back of Card" /></div>
                    <div className="front" >
                        <img id="frontcard" alt={name} src={"images/" + name + ".png"} />
                    </div>
                </div>
            </div>
        </div>
    );
}
// Exported WinCards to WinBoard.
export default WinCards;