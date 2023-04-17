import React from "react";
import "./css/style.css";

// Видео плеер
export function VideoPlayer({ pathVideo }: any) {

    return (
        <>
            <div className="video-player_container">
                <div className="video-player_item">
                    <video src={pathVideo} controls />
                </div>
            </div>
        </>
    )
}