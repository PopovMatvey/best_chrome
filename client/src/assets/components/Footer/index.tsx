import React from "react";
import "./css/style.css";
import logo from '../../images/logo.png';
import mail from "./images/mail.svg";
import youtube from "./images/youtube.svg";
import whatsup from "./images/whatsup.svg";
import phone from "./images/phone.svg";
import tracker from "./images/tracker.svg";

// Подвал
export function Footer() {
    const hrefOnMail = "mailto:bestchromshop@gmail.com";                                    // Ссылка на почту bestchromshop@gmail.com 
    const hrefOnYoutybe = "https://www.youtube.com/channel/UCiUKKuWHYX4jQWrI543D9gwe";      // Ссылка на YouTube
    const hrefOnWhatsUp = "#btnd";                                                          // Ссылка на Whats up
    const hrefOnMap = `https://yandex.ru/map-widget/v1/?um=constructor%3A36a8
    ad64addb63f5b777bbffe6788c4f481599dfbb8beb9c4fa6fc9779c277c4&amp;source=constructor`;   // Ссылка на карту
    const arrayPhones = [                                                                   // Номера телефонов
        "8-915-627-38-29",
        "8-915-627-38-31",
    ]

    return (
        <footer>
            <div className="footer-content">
                <div className="footer-content_img">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="footer-content_contacts">
                    <a href={hrefOnMail}><img src={mail} alt="Иконка почты" /></a>
                    <a href={hrefOnYoutybe}><img src={youtube} alt="Иконка почты" /></a>
                    <a href={hrefOnWhatsUp}><img src={whatsup} alt="Иконка почты" /></a>
                </div>
                <div className="footer-content_communication">
                    <div className="footer-content_communication__row">
                        <div className="footer-content_communication___icon">
                            <img src={tracker} alt="Иконка метки" />
                        </div>
                        <div className="footer-content_communication__contacts">
                            <a href={hrefOnMap}>
                                г. Тверь, ул. Новая 10
                            </a>
                        </div>
                    </div>
                    <div className="footer-content_communication__row">
                        <div className="footer-content_communication___icon">
                            <img src={phone} alt="Иконка телефона" />
                        </div>
                        <div className="footer-content_communication__contacts">
                            {
                                arrayPhones.map((element, index) => (
                                    <a href={`tel:${element}`} key={index++}>
                                        {element}
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <span>Все права защищены. <a href="https://matveypopov.ru/">Разработчик Попов М.С.</a>  © 2023</span>
        </footer>
    );
}