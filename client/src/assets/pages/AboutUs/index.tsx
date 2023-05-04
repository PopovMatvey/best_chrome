import React from "react";
import "./css/style.css";
import imgFirst from "./images/img1.svg";
import imgSecond from "./images/img2.svg";
import sertFirst from "./images/sert1.svg";
import { SlideMenu } from "../../components/SlideMenu";
import { ImageSlider } from "../../components/ImageSlider";
import { YouTubeVideo } from "../../components/YouTubeVideo";
import { useRequestArray } from "../../hook/useRequestArray";
import { urlPartnersApi } from "../../data/apiUrls";

// О нас
export function AboutUs() {
    const arrayImagePartners = useRequestArray(urlPartnersApi).requestArray;

    return (
        <>
            <div className="about-us-container">
                <div className="about-us-container_beginner-screen beginner-screen">
                    <SlideMenu />
                    <div className="about-us-container_beginner-screen_content">
                        <h1>О нас</h1>
                        <div className="about-us-container_beginner-screen_content__row">
                            <div className="about-us-container_beginner-screen_content__row_image-block">
                                <img src={imgFirst} alt="" />
                            </div>
                            <span>
                                Для современного мира убеждённость некоторых оппонентов
                                способствует повышению качества поставленных обществом задач.
                            </span>
                        </div>
                        <div className="about-us-container_beginner-screen_content__row">
                            <span>
                                В частности, постоянный количественный
                                рост и сфера нашей активности играет определяющее значение для переосмысления внешнеэкономических политик.
                            </span>
                            <div className="about-us-container_beginner-screen_content__row_image-block">
                                <img src={imgSecond} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="abuot-us-container_video">
                    <h3>Видео о нас</h3>
                    <div className="abuot-us-container_video_component">
                        <YouTubeVideo videoId="QqgBzPfBkj0"/>
                    </div>
                </div>
                <div className="about-us-container_serteficates">
                    <h3>Наши сертификаты</h3>
                    <span>
                        Лишь акционеры крупнейших компаний,
                        инициированные исключительно синтетически,
                        подвергнуты целой серии независимых исследований.
                    </span>
                    <div className="about-us-container_serteficates_images">
                        <img src={sertFirst} alt="Сертефикат" />
                        <img src={sertFirst} alt="Сертефикат" />
                        <img src={sertFirst} alt="Сертефикат" />
                    </div>
                </div>
                <div className="about-us-container_our-partners">
                    <h3>Наши партнеры:</h3>
                    <div className="about-us-container_our-partners_contaiiner">
                        <ImageSlider items={arrayImagePartners} />
                    </div>
                </div>
            </div>
        </>
    )
}