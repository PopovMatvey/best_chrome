import React from "react";
import "./css/style.css";
import { SlideMenu } from "../../components/SlideMenu";
import { ImageSlider } from "../../components/ImageSlider";
import { YouTudeVideoSlider } from "../../components/YouTubeVideoSlider";
// import { arrayYouTubeVideos } from "../../data/arrauYouTubeVidoSlider";
import { useRequestArray } from "../../hook/useRequestArray";
import { urlPortfolioImagesApi, urlPortfolioVideosApi } from "../../data/apiUrls";

// Наши работы
export function OurWorks() {
    const arrayImagePortfolio = useRequestArray(urlPortfolioImagesApi).requestArray;
    const arrayYouTubeVideos = useRequestArray(urlPortfolioVideosApi).requestArray;

    return (
        <>
            <div className="out-works-container">
                <div className="out-works-container_beginner-screen beginner-screen">
                    <SlideMenu />
                    <div className="out-works-container_beginner-screen_container">
                        <h1>Наши работы</h1>
                        <div className="out-works-container_beginner-screen_text">
                            <span>
                                Вот вам яркий пример значимой части наших работ.
                            </span>
                            {/* 
                            <span>
                                Каждый из нас понимает очевидную вещь: сложившаяся
                                структура организации способствует повышению качества
                                новых предложений.
                            </span>
                            <span>
                                С другой стороны, глубокий уровень погружения обеспечивает
                                широкому кругу (специалистов) участие в формировании направлений
                                прогрессивного развития.
                            </span> 
                            */}
                        </div>
                    </div>
                </div>
                <div className="out-works-container_beginner-screen_portfolio">
                    <h3>Портфолио</h3>
                    <div className="out-works-container_beginner-screen_portfolio_contaiiner">
                        <ImageSlider items={arrayImagePortfolio} />
                    </div>
                    <div className="out-works-container_beginner-screen_portfolio_contaiiner_videos">
                        <YouTudeVideoSlider items={arrayYouTubeVideos} />
                    </div>
                </div>
            </div>
        </>
    )
}