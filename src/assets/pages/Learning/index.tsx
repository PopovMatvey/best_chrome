import React from "react";
import { SlideMenu } from "../../components/SlideMenu";
import "./css/style.css";

// Обучение
export function Learning() {

    return (
        <>
            <div className="learning-container">
                <div className="learning-container_beginner-screen">
                    <SlideMenu />
                    <h1>Обучение</h1>
                </div>
            </div>
        </>
    )
}