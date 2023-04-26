import React from "react";
import "./css/style.css";
import YouTube from "react-youtube";

// Видео YouTube
export function YouTubeVideo({ videoId }: any) {
    // Настройки видео youtube
    const options = {
        height:'auto',
        width: '280',
        playerVars: {
            autoplay: 0,
        },
    };

    // Готовность воспроизведения
    function _onReady(event: any) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    return (
        <>
            <YouTube videoId={videoId} opts={options} onReady={_onReady} />
        </>
    )
}