// Imported react libraries.
import React, { Component } from "react";
// Imported Axios to assist retrieving external data from API.
import axios from "axios";

// Defined the currency converter states.
class Conversions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: null,
            fromCurrency: "USD",
            amount: 1,
            currencies: []
        };
    }

    // Fetching the keys/ rates from the API. Created an array of the currencies that I would like to use as the "to" currencies and pushing the 
    // selected currency to the end of the array via the push() method. Also set an error handler should something go wrong.
    componentDidMount() {
        axios
            .get("http://data.fixer.io/api/latest?access_key=34133d0b08e1117ce1234330c92156ff&format=1")
            .then(response => {
                const currencyAr = ['-- Select Currency --'];
                for (const key in response.data.rates) {
                    if (['ZAR', 'GBP', 'EUR'].includes(key)) { currencyAr.push(key); }
                }
                this.setState({ currencies: currencyAr });
            })
            .catch(err => {
                console.log("Error", err);
            });
    }

    // Set a conversion handler so that, when the "Convert" button is clicked the value will be returned from the API. The amount that was 
    // entered by the user will be multiplied by the "to" currency based on the "from" currency and displayed to 2 decimal places (using 
    // toFixed() method). Also set an error handler should something go wrong.
    convertHandler = () => {
        if (this.state.fromCurrency !== this.state.toCurrency) {
            axios
                .get(
                    `http://data.fixer.io/api/latest?access_key=34133d0b08e1117ce1234330c92156ff&format=1?base=${this.state.fromCurrency
                    }&symbols=${this.state.toCurrency}`
                )
                .then(response => {
                    const result =
                        this.state.amount * response.data.rates[this.state.toCurrency];
                    this.setState({ result: result.toFixed(2) });
                })
                .catch(error => {
                    console.log("Error", error.message);
                });
        }
    };

    // Created a select handler to return the values based on the currency options that were selected.
    selectHandler = event => {
        if (event.target.name === "from") {
            this.setState({ fromCurrency: event.target.value });
        } else {
            if (event.target.name === "to") {
                this.setState({ toCurrency: event.target.value });
            }
        }
    };

    // Rendering and returning the information. Calling onChange() and onClick() functions and requesting the value for display. Mapping through the "to" 
    // currencies to retrieve the selected currency's value. Calling the calculated value and displaying it in the <h3> element.
    render() {
        return (
            <div className="Form">
                <label>Amount:</label>
                <input
                    id="currencyinput"
                    name="amount"
                    type="text"
                    value={this.state.amount}
                    onChange={event => this.setState({ amount: event.target.value })}
                />
                <label>From USD:</label>
                <select
                    name="from"
                    onChange={event => this.selectHandler(event)}
                    value={this.state.fromCurrency}
                >
                    <option>USD</option>
                </select>
                <label>To currency:</label>
                <select
                    name="to"
                    onChange={event => this.selectHandler(event)}
                    value={this.state.toCurrency}
                >
                    {this.state.currencies.map(cur => (
                        <option key={cur}>{cur}</option>
                    ))}
                </select>
                <button id="currencybutton" onClick={this.convertHandler}>Convert</button>
                {this.state.result && <h3 id="converteroutput">{this.state.result}</h3>}
            </div>
        );
    }
}

// Exported "Conversions" to CurrencyConverter.js.
export default Conversions;