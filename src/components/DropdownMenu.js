// Imported react libraries.
import React from 'react';
// Imported components from React Bootstrap.
import { Dropdown } from "react-bootstrap";
// Imported useLocation from React Router Dom.
import { useLocation } from 'react-router-dom';
// Imported icon from Font Awesome.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Added a location variable and created the isCurrentURL function to check whether the page is currently active and, if so, to deactivate the 
// dropdown menu item from the dropdown, only showing the other pages. Wrapped the dropdown items accordingly.
function DropdownMenu() {
    const location = useLocation();

    const isCurrentURL = (url) => {
        return location.pathname.toLowerCase() === url.toLowerCase();
    }
    return (
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                    <FontAwesomeIcon icon={faBars} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {!isCurrentURL('/') ?
                        <Dropdown.Item href="/">Home</Dropdown.Item>
                        : null}
                    {!isCurrentURL('/CurrencyConverter') ?
                        <Dropdown.Item href="/CurrencyConverter">Currency Converter</Dropdown.Item>
                        : null}
                    {!isCurrentURL('/Win') ?
                        <Dropdown.Item href="/Win">Win!</Dropdown.Item>
                        : null}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
// Exported "DropdownMenu" to App.js.
export default DropdownMenu;