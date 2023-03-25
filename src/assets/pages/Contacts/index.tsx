import React from "react";
import { SlideMenu } from "../../components/SlideMenu";
import "./css/style.css";

// Контакты
export function Contacts() {

    return (
        <>
            <div className="contacts-container">
                <div className="contacts-container_beginner-screen beginner-screen">
                    <SlideMenu />
                    <div className="contacts-container_beginner-screen_content">
                        <h1>Контакты</h1>
                        <div className="contacts-container_beginner-screen_content_contacts">
                            <div className="contacts-container_beginner-screen_content_contact_row">
                                <div className="contacts-container_beginner-screen_content_contact_row_time-work">
                                    <h6>Режим работы</h6>
                                    <span>ПН - ВС  9:00 - 21:00</span>
                                    <span> Ежедневно, без выходных</span>
                                </div>
                                <div className="contacts-container_beginner-screen_content_contact_row_mail">
                                    <h6>Наша электронная почта</h6>
                                    <a href="Bestchromeshop@gmail.com">Bestchromeshop@gmail.com</a>
                                </div>
                            </div>
                            <div className="contacts-container_beginner-screen_content_contact_row">
                                <div className="contacts-container_beginner-screen_content_contact_row_phone">
                                    <h6>наши телефоны</h6>
                                    <div className="contacts-container_beginner-screen_content_contact_row_phone_phones">
                                        <img src="" alt="" />
                                        <div className="contacts-container_beginner-screen_content_contact_row_phone_phones_item">
                                            <a href="">+7 (915) 627-38-29</a>
                                            <span>Менеджер</span>
                                        </div>
                                        <div className="contacts-container_beginner-screen_content_contact_row_phone_phones_item">
                                            <a href="">+7 (915) 627-38-29</a>
                                            <span>Технолог</span>

                                        </div>
                                        <div className="contacts-container_beginner-screen_content_contact_row_phone_phones_item">
                                            <a href="">+7 (915) 627-38-29</a>
                                            <span>Руководитель</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}