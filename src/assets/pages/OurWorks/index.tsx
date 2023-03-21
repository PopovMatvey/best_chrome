import React from "react";
import { SlideMenu } from "../../components/SlideMenu";
import "./css/style.css";

// Наши работы
export function OurWorks() {

    return (
        <>
            <div className="out-works-container">
                <div className="out-works-container_beginner-screen beginner-screen">
                    <SlideMenu />
                    <h1>Наши работы</h1>
                </div>
            </div>
        </>
    )
}