import React from "react";
import { Link } from "react-router-dom";
import "./css/style.css";

// Боковое меню
export function SlideMenu() {

    return (
        <>
            <div className="slide-menu-container">
                <Link to={"/"}>О нас</Link>
                <Link to={"/servises"}>Услуги</Link>
                <a href="https://bestchrome.store/">Магазин</a>
                <Link to={"/learning"}>Обучение</Link>
                <Link to={"/ourWorks"}>Наши работы</Link>
                <Link to={"/contacts"}>Контакты</Link>
            </div>
        </>
    )
}
