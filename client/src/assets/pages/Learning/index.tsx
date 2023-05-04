import React from "react";
import { SlideMenu } from "../../components/SlideMenu";
import "./css/style.css";
import sertificate from "./images/sertificates.svg";
import time from "./images/time.svg";
import hends from "./images/hends.svg";
import { ImageSlider } from "../../components/ImageSlider";
import { useRequestArray } from "../../hook/useRequestArray";
import { urlStudentsApi } from "../../data/apiUrls";

// Обучение
export function Learning() {
    const arrayStudents = useRequestArray(urlStudentsApi).requestArray;

    return (
        <>
            <div className="learning-container">
                <div className="learning-container_beginner-screen beginner-screen">
                    <SlideMenu />
                    <div className="learning-container_beginner-screen_container">
                        <h1>Обучение</h1>
                        <div className="learning-container_beginner-screen_text">
                            <span>
                                Вот вам яркий пример современных тенденций —
                                синтетическое тестирование прекрасно подходит
                                для реализации новых предложений. Каждый из нас понимает
                                очевидную вещь: сложившаяся структура организации способствует
                                повышению качества новых предложений.
                            </span>
                        </div>
                        <div className="learning-container_beginner-screen_benifits">
                            <h3>Преимущества обучения у нас:</h3>
                            <div className="learning-container_beginner-screen_benifits_container">
                                <div className="learning-container_beginner-screen_benifits_item">
                                    <div className="learning-container_beginner-screen_benifits_item_image">
                                        <img src={hends} alt="Иконка преимущества" />
                                    </div>
                                    <h6>
                                        Востребованная
                                        профессия
                                    </h6>
                                </div>
                                <div className="learning-container_beginner-screen_benifits_item">
                                    <div className="learning-container_beginner-screen_benifits_item_image">
                                        <img src={time} alt="Иконка преимущества" />
                                    </div>
                                    <h6>
                                        Быстрое
                                        обучение
                                    </h6>
                                </div>
                                <div className="learning-container_beginner-screen_benifits_item">
                                    <div className="learning-container_beginner-screen_benifits_item_image">
                                        <img src={sertificate} alt="Иконка преимущества" />
                                    </div>
                                    <h6>
                                        Получение
                                        сертификата
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="learning-container_students">
                    <h3>Наши ученики:</h3>
                    <div className="learning-container_students_contaiiner">
                        <ImageSlider items={arrayStudents} />
                    </div>
                </div>
            </div>
        </>
    )
}