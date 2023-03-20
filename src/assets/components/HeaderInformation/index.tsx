import React from "react";
import logo from '../../images/logo.png';
import './css/style.css';

// Информация шапки
export function HeaderInformation() {
    return (
        <div className="header-information">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
}
