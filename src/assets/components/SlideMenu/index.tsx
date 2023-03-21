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
                <Link to={"/shop"}>Магазин</Link>
                <Link to={"/learning"}>Обучение</Link>
                <Link to={"/technologies"}>Технологии</Link>
                <Link to={"/ourWorks"}>Наши работы</Link>
                <Link to={"/crashTests"}>Краш-тетсы</Link>
                <Link to={"/contacts"}>Контакты</Link>
            </div>
        </>
    )
}
