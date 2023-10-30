import React from "react";
import "./css/style.css";
import logo from '../../images/logo.png';
import mail from "./images/mail.svg";
import youtube from "./images/youtube.svg";
import whatsup from "./images/whatsup.svg";
import phone from "./images/phone.svg";
import tracker from "./images/tracker.svg";
import vk from "./images/vk.svg";

// Подвал
export function Footer() {
    const hrefOnMail = "mailto:bestchromshop@gmail.com";                                    // Ссылка на почту bestchromshop@gmail.com 
    const hrefOnYoutybe = "https://www.youtube.com/channel/UCiUKKuWHYX4jQWrI543D9gw";       // Ссылка на YouTube
    const hrefOnVK = 'https://vk.com/bestchrome'                                            // Ссылка на ВК
    const arrayPhones = [                                                                   // Номера телефонов
        "+7 (938) 878-92-68",
        "+7 (960) 867-24-13",
    ];
    // Ссылка на Whats up        
    const targetWhatsAppPhone = "2B79608672413";
    const targetWhatsAppMessage = "D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5+%D1%8F+%D0%B7%D0%B0%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BE%D0%B2%D0%B0%D0%BD+%D0%B2+%D0%B2%D0%B0%D1%88%D0%B8%D1%85+%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B0%D1%85";
    const hrefOnWhatsUp = `https://api.whatsapp.com/send/?phone=%${targetWhatsAppPhone}&text=%${targetWhatsAppMessage}`;
    // Ссылка на карту
    const hrefOnMap = `https://yandex.ru/map-widget/v1/?um=constructor%3A36a8ad64addb63f5b777bbffe6788c4f481599dfbb8beb9c4fa6fc9779c277c4&amp;source=constructor`;

    return (
        <footer>
            <div className="footer-content">
                <div className="footer-content_img">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="footer-content_contacts">
                    <a href={hrefOnMail} target="_blank "><img src={mail} alt="Иконка почты" /></a>
                    <a href={hrefOnYoutybe} target="_blank "><img src={youtube} alt="Иконка почты" /></a>
                    <a href={hrefOnWhatsUp} target="_blank "><img src={whatsup} alt="Иконка почты" /></a>
                    <a href={hrefOnVK} target="_blank "><img src={vk} alt="Иконка vk" /></a>
                </div>
                <div className="footer-content_communication">
                    <div className="footer-content_communication__row">
                        <div className="footer-content_communication___icon">
                            <img src={tracker} alt="Иконка метки" />
                        </div>
                        <div className="footer-content_communication__contacts">
                            <a
                                href={hrefOnMap}
                                target="_blank "
                            >
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
            <span>Все права защищены. <a href="https://matveypopov.ru/">Разработчик Попов М.С. https://matveypopov.ru/</a>  © 2023</span>
        </footer>
    );
}