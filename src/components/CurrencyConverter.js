// Imported react libraries.
import React from "react";
// Imported components.
import ConverterHeader from './ConverterHeader';
import Conversions from './Conversions';

// Returning the information. Added child components.
function CurrencyConverter() {
    return (
        <div className="Converter">
            <ConverterHeader />
            <div>
                <h2>Currency Converter</h2>
                <p>Want to convert the value of your cash playing bundle or your winnings? No problem. Use the below currency converter for an
                    up to date conversion.</p>
                <p>Enter the value in Dollars and select the currency that you would like the amount converted to. Click on "Convert" and the
                    total should display at the bottom.
                </p>
            </div>
            <Conversions />
        </div>
    );
}

// Exported "CurrencyConverter" to App.js.
export default CurrencyConverter;