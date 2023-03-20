import React from "react";
import logo from '../../images/logo.png';
import "./css/style.css";
import mail from "./images/mail.svg";
import youtube from "./images/youtube.svg";
import whatsup from "./images/whatsup.svg";
import phone from "./images/phone.svg";
import tracker from "./images/tracker.svg";

// Подвал
export function Footer() {

    return (
        <footer>
            <div className="footer-content">
                <div className="footer-content_img">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="footer-content_contacts">
                    <a href="#m"><img src={mail} alt="Иконка почты" /></a>
                    <a href="#y"><img src={youtube} alt="Иконка почты" /></a>
                    <a href="#w"><img src={whatsup} alt="Иконка почты" /></a>
                </div>
                <div className="footer-content_communication">
                    <div className="footer-content_communication__row">
                        <div className="footer-content_communication___icon">
                            <img src={tracker} alt="Иконка метки" />
                        </div>
                        <div className="footer-content_communication__contacts">
                            <a href="#ds">
                                г. Тверь, ул. Новая 10
                            </a>
                        </div>
                    </div>
                    <div className="footer-content_communication__row">
                        <div className="footer-content_communication___icon">
                            <img src={phone} alt="Иконка телефона" />
                        </div>
                        <div className="footer-content_communication__contacts">
                            <a href="tel:+7-915-627-38-29">
                                +7-915-627-38-29
                            </a>
                            <a href="tel:+7-915-627-38-29">
                                +7-915-627-38-29
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <span>Все права защищены © 2023</span>
        </footer>
    );
}