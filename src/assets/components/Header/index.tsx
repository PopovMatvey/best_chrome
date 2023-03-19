import React from "react";
import './css/style.css';
import header from "./image/header.png";
import { HeaderInformation } from "../HeaderInformation";

export function Header(){

    return(
        <header>
            <HeaderInformation/>
            <img src={header} alt="Фон шапки" />
        </header>
    );
}