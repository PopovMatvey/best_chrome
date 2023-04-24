import React from "react";
import "./css/style.css";
import YouTube from "react-youtube";

export function YouTubeVideo({ videoId }: any) {
    // Настройки видео youtube
    const options = {
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