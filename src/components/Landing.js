// Imported react libraries and LandingHeader component.
import React from 'react';
import LandingHeader from './LandingHeader';
// Imported components from React Bootstrap.
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Landing() {
    // Returning the information to be displayed in a row. */}
    return (
        <Container>
            <LandingHeader />
            <h1>Welcome!</h1>
            <Row>
                <div className="landingCard">
                    <p>Do you feel like a bit of adrenaline, taking your chances in possibly doubling some money? If this sounds like an
                        experience that triggers you, why not take a gamble and visit us for a fun rush?</p>
                    <p>Our luxurious facilities and services are top-notch and our staff even better. We have three bars that also serve finger
                        snacks, a cigar lounge, a rooftop club, waitrons and bartenders that are eager to serve you something delicious and every machine and table that you can imagine.</p>
                    <p>We would love the opportunity to welcome you through our doors and entertain you like you have never been entertained
                        before.</p>
                </div>
            </Row>
        </Container>
    );
}
// Exported "Landing/ About Us" to App.js.
export default Landing;