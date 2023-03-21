import React from "react";
import { SlideMenu } from "../../components/SlideMenu";
import "./css/style.css";

// Контакты
export function Contacts() {

    return (
        <>
            <div className="contacts-container">
                <div className="contacts-container_beginner-screen beginner-screen">
                    <SlideMenu />
                    <h1>Контакты</h1>
                </div>
            </div>
        </>
    )
}