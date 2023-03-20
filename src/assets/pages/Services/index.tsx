import React from "react";
import { SlideMenu } from "../../components/SlideMenu";
import "./css/style.css";

// Услуги
export function Services() {

    return (
        <>
            <div className="services-container">
                <div className="services-container_beginner-screen">
                    <SlideMenu />
                    <h1>Услуги</h1>
                </div>
            </div>
        </>
    )
}