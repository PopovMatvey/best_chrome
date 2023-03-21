import React from "react";
import { SlideMenu } from "../../components/SlideMenu";
import "./css/style.css";

// Магазин
export function Shop() {

    return (
        <>
            <div className="shop-container">
                <div className="shop-container_beginner-screen beginner-screen">
                    <SlideMenu />
                    <h1>Магазин</h1>
                </div>
            </div>
        </>
    )
}
