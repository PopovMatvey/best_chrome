import React from "react";
import { SlideMenu } from "../../components/SlideMenu";
import "./css/style.css";

// О нас
export function AboutUs() {

    return (
        <>
            <div className="about-us-container">
                <div className="about-us-container_beginner-screen">
                    <SlideMenu />
                    <h1>О нас</h1>
                </div>
            </div>
        </>
    )
}