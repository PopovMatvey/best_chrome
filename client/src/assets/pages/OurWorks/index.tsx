import React from "react";
import { SlideMenu } from "../../components/SlideMenu";
import "./css/style.css";
import { ImageSlider } from "../../components/ImageSlider";
import { arrayImagePortfolio } from "../../data/arrayImagePortfolio";

// Наши работы
export function OurWorks() {

    return (
        <>
            <div className="out-works-container">
                <div className="out-works-container_beginner-screen beginner-screen">
                    <SlideMenu />
                    <div className="out-works-container_beginner-screen_container">
                        <h1>Наши работы</h1>
                        <div className="out-works-container_beginner-screen_text">
                            <span>
                                Вот вам яркий пример современных тенденций —
                                синтетическое тестирование прекрасно подходит
                                для реализации новых предложений.
                            </span>
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
                        </div>
                    </div>
                </div>
                <div className="out-works-container_beginner-screen_portfolio">
                    <h3>Портфолио</h3>
                    <div className="out-works-container_beginner-screen_portfolio_contaiiner">
                        <ImageSlider items={arrayImagePortfolio} />
                    </div>
                </div>
            </div>
        </>
    )
}