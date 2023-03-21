import React from "react";
import { SlideMenu } from "../../components/SlideMenu";
import "./css/style.css";

// Технологии
export function Technologies() {

    return (
        <>
            <div className="technologies-container">
                <div className="technologies-container_beginner-screen beginner-screen">
                    <SlideMenu />
                    <h1>Технологии</h1>
                </div>
            </div>
        </>
    )
}