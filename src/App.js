// Imported react libraries and components.
import React from 'react';
// Imported css styles.
import './App.css';
// Imported components.
import DropdownMenu from './components/DropdownMenu';
import CurrencyConverter from './components/CurrencyConverter';
import Landing from './components/Landing';
import WinBoard from './components/WinBoard';
// Imported router and route matchers from React Router Dom.
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Returning data to be exported to Index.js. Used "BrowserRouter", "Switch and "Route" to show components and add to the dropdown menu with 
// assigned URLs. Added components below.
function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <DropdownMenu />
          <Switch>
            <Route exact={true} path="/" render={() => (
              <Landing />
            )} />
            <Route path="/CurrencyConverter" render={() => (
              <CurrencyConverter onChange={(e) => this.setState({ fromCurrency: e.target.value })} />
            )} />
            <Route path="/Win" render={() => (
              <WinBoard />
            )} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
// Exporting to render App component in Index.js where the ReactDom.Render() method is called.
export default App;