import React from "react";
import "./css/style.css";
import { SlideMenu } from "../../components/SlideMenu";

export function CrashTests() {

    return (
        <>
            <div className="crash-tests-container_beginner-screen beginner-screen">
                <SlideMenu />
                <div className="crash-tests-container_beginner-screen_container">
                    <h1>Краш-тесты</h1>
                    <span>Скоро здесь будут краш-тесты...</span>
                </div>
            </div>
        </>
    )
}