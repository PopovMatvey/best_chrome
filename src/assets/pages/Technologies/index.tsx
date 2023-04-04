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
                    <div className="technologies-container_beginner-screen_container">
                        <h1>Технологии</h1>
                        <span>Здесь будут статьи по технология хромирования...</span>
                    </div>
                </div>
            </div>
        </>
    )
}