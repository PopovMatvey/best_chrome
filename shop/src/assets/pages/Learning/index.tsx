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
                                Проводим обучение по технологии, собственная разработка зеркального покрытия и своя линейка материалов от базового до финишного покрытия.
                            </span>
                            <span>
                                Обучаем желающих как уже знакомых с химической металлизацией, но по какой-то причине не получается, так и тех, кто хочет начать свой бизнес с нуля, иметь дополнительный зароботок или как основной.
                            </span>
                            <span>
                                Обучение проходит по алгоритму, отработанному годами. Если вы будете придерживаться нашей технологии, то ваше зеркальное покрытие не будет иметь желтоватый оттенок, муары, коричневые подтёки и прочий брак на поверхности.
                            </span>
                            <span>
                                Наши ученики получают советы, рекомендации от выбора и обустройства помещения, до сфер направлений бизнеса, где наша технология позволяет принести наибольшую прибыль!
                            </span>
                            <span>
                                Ученик после прохождения обучения не останется один, наш технолог по телефону (с 10 до 18 по МСК), проконсультирует, если возникнут какие-то вопросы!
                            </span>
                            <span>
                                Также у нас вы можете приобрести наборы серебрения для самостоятельного нанесения, оборудование, установку для получения дистиллированной воды, на которой работают наши растворы, установку для получения дистиллированной воды, на которой работают наши растворы, установку по очистке воздуха от конденсата и масел, выходящих с компрессора.
                            </span>
                            <span>
                                PS. Обучение может проходить как в нашем тех. центре, так и дистанционно, это всё обсуждается по телефону или WhatsApp.
                            </span>
                            <span>
                                Работаем по всей России!
                            </span>
                            <span>
                                Наши ученики всегда получают Результат!
                            </span>
                        </div>
                    </div>
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