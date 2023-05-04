import React from "react";
import { SlideMenu } from "../../components/SlideMenu";
import "./css/style.css";
import phone from './images/phone.svg';
import mail from "./images/mail.svg";

// Контакты
export function Contacts() {
    const mailContact = "bestchromshop@gmail.com";
    const menagerPhone = '+7 (915) 627-38-29';
    const technologPhone = '+7 (915) 627-38-29';
    const directorPhone = '+7 (915) 627-38-29';
    const addressOrganization = '170022 обл. Тверская, г. Тверь, ул. Новая, д. 10';
    const hrefOnMapAddress = `https://yandex.ru/map-widget/v1/?um=constructor%3A36a8ad64addb63f5b777bbffe6788c4f481599dfbb8beb9c4fa6fc9779c277c4&amp;source=constructor`;
    
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
                                    <div className="contacts-container_beginner-screen_content_contact_row_mail_block">
                                        <img src={mail} alt="иконка почты" />
                                        <a href={`mailto:${mailContact}`}>{mailContact}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="contacts-container_beginner-screen_content_contact_row">
                                <div className="contacts-container_beginner-screen_content_contact_row_phone">
                                    <h6>Наши телефоны</h6>
                                    <div className="contacts-container_beginner-screen_content_contact_row_phone_phones">
                                        <img src={phone} alt="иконка телефона" />
                                        <div className="contacts-container_beginner-screen_content_contact_row_phone_phones_item">
                                            <a href={`tel:${menagerPhone}`}>{menagerPhone}</a>
                                            <span>Менеджер</span>
                                        </div>
                                        <div className="contacts-container_beginner-screen_content_contact_row_phone_phones_item">
                                            <a href={`tel:${technologPhone}`}>{technologPhone}</a>
                                            <span>Технолог</span>

                                        </div>
                                        <div className="contacts-container_beginner-screen_content_contact_row_phone_phones_item">
                                            <a href={`tel:${directorPhone}`}>{directorPhone}</a>
                                            <span>Руководитель</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contacts-container_beginner-screen_content_contact_row">
                                <div className="contacts-container_beginner-screen_content_contact_row_map">
                                    <h6>Наш адрес</h6>
                                    <span>{addressOrganization}</span>
                                    <div className="contacts-container_beginner-screen_content_contact_row_map_image">
                                        <iframe title="map" src={hrefOnMapAddress} width="100%" height="400"></iframe>
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