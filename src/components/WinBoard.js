// Imported react libraries.
import React, { useState } from "react";
// Imported components.
import WinCards from "./WinCards";
import WinEnd from "./WinEnd";
import WinHeader from './WinHeader';

// Created an array for the front of the cards.
const WinBoard = () => {
    const cards = [
        "ace",
        "joker1",
        "joker2"
    ];

    // Shuffling the array by setting the current index and maintaining this until the next card is fetched then setting the data. Used
    // Math.floor() and Math.random() to randomize the outputs.
    const shuffle = array => {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };

    // Set the value and set the state and looped through the array to set the initial output.
    const [cardList, setCardList] = useState(
        shuffle(cards).map((name, index) => {
            return {
                id: index,
                name: name,
                flipped: false,
            };
        })
    );

    // Set the values and set the states of flippedCards and winEnd to show unturned cards and to not show the WinEnd content.
    const [flippedCards, setFlippedCards] = useState([]);
    const [winEnd, setWinEnd] = useState(false);

    // Constructed a click handler to fetch the value using the name and the index.
    const handleClick = (name, index) => {
        let currentCard = {
            name,
            index
        };
        
        // Once the card has been clicked on looping through the array changing the flipped boolean to true and updating and returning the card that
        // has been fetched.
        let updateCards = cardList.map(card => {
            if (card.id === index) {
                card.flipped = true;
            }
            return card;
        });
        let updateFlipped = flippedCards;
        updateFlipped.push(currentCard);
        setFlippedCards(updateFlipped);
        setCardList(updateCards);
        isWinEnd(true);
    }

    // Once the card has been flipped and revealed calling the winEnd function to be executed and displayed via the "WinEnd" component.
    const isWinEnd = () => {
        let done = true;
        cardList.forEach(card => {
            if (!card.flipped) done = true;
        });
        setWinEnd(done);
    };

    // Set for the cards to be reshuffled, looped through the array and set for flippedCards and winEnd to show unturned cards and to not show the 
    // WinEnd content if a client decides to click on the "Try Again" button.
    const restartGame = () => {
        setCardList(
            shuffle(cards).map((name, index) => {
                return {
                    id: index,
                    name: name,
                    flipped: false,
                };
            })
        );
        setFlippedCards([]);
        setWinEnd(false);
    };

    // Returning the information. Added the components. Set flippedCards to equal 1 to only be able to flip one card/ play once.
    return (
        <div>
            <div id="winheader">
                <WinHeader />
                <h1>Take a Chance!</h1>
                <p>Feeling lucky? What will your cards reveal?</p>
                <p>Take part in the below card game and stand a chance to win R500.00 in cash redeemable for use at our facilities the next time
                    you visit us.</p>
                <p>If you hit the ace you are a winner, but you have to avoid the jokers that are lurking around.</p>
                <h6>Terms and Conditions apply.</h6>
            </div>
            <div className="win-board">
                {
                    cardList.map((card, index) => (
                        <WinCards
                            key={index}
                            id={index}
                            name={card.name}
                            flipped={card.flipped}
                            clicked={flippedCards.length === 1 ? () => { } : handleClick}
                        />
                    ))}
                {winEnd && <WinEnd restartGame={restartGame} />}
            </div>
        </div>
    );
};

// Exported WinBoard to App.js.
export default WinBoard;