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
                <Link to={"/https://bestchrome.store/"}>Магазин</Link>
                <Link to={"/learning"}>Обучение</Link>
                <Link to={"/ourWorks"}>Наши работы</Link>
                <Link to={"/contacts"}>Контакты</Link>
            </div>
        </>
    )
}
