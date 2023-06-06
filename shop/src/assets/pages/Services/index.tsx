import React from "react";
import { SlideMenu } from "../../components/SlideMenu";
import "./css/style.css";
import { arrayTypeServices } from "./data/arratTypeServices";

// Услуги
export function Services() {

    return (
        <>
            <div className="services-container">
                <div className="services-container_beginner-screen beginner-screen">
                    <SlideMenu />
                    <div className="services-container_beginner-screen_content">
                        <h1>Услуги</h1>
                        <div className="services-container_beginner-screen_assortiment">
                            {
                                arrayTypeServices.map((element , i) => (
                                    <div className="services-container_beginner-screen_assortiment_item" key={i++}>
                                        <img src={element.imageTypeService} alt="Изображение типа услуг" />
                                        <h3>{element.nameTypeService}</h3>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}