import React, {useState} from "react";
import ReactPlayer from 'react-player/lazy';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {YouTubeIcon} from "./icons";
import "./manim-youtube-carousel.scss";

const CAROUSEL_SPEED = 3000;
const VIDEO_INFO = [
    { id:'GiDsjIBOVoA', start: 176 },
    { id: 'AM6BY4btj-M' },
    { id:'NdqaX9aLkg8' },
]

const YoutubeSlide = ({id, isSelected, onPauseCB, startAt=0, play=false}) => {
    return (
        <div className='yt-slide'>
            <ReactPlayer
                height={"100%"}
                width={"100%"}
                url={`https://www.youtube.com/embed/${id}`}
                light={play ? false : `https://i.ytimg.com/vi_webp/${id}/hqdefault.webp`}
                playIcon={
                    <YouTubeIcon surround_fill="#212121" play_fill="#fff" width={64} />
                }
                onPause={onPauseCB}
                playing={isSelected}
                config={{ youtube: { playerVars: { start: startAt } } }}/>
        </div>
    )
};

const ManimYoutubeCarousel = () => {
    const [playVideos, setPlayVideos] = useState(VIDEO_INFO.map(() => false))
    const [autoPlay, setAutoPlay] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedSlide, setSelectedSlide] = useState(0);

    const onChangeCarousel = i => {
        resumeCarousel();
        if (i === currentSlide) setSelectedSlide(i);
        if (selectedSlide === currentSlide) setSelectedSlide(0);
        setCurrentSlide(i);
    }

    const onClickCarousel = i => {
        setAutoPlay(false);
        setPlayVideos(playVideos.map((_, idx) => idx === i));
    }

    const resumeCarousel = () => {
        setAutoPlay(true);
        setPlayVideos(playVideos.map(() => false));
    }

    const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;



    return (
        <div className="youtube-carousel-div">
            <YouTubeIcon />
            <h2>Made with Manim</h2>
            <Carousel
                autoPlay={autoPlay}
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                interval={CAROUSEL_SPEED}
                selectedItem={selectedSlide}
                onChange={onChangeCarousel}
                onClickItem={onClickCarousel}
                renderItem={customRenderItem}
            >
                {VIDEO_INFO.map((info, i) => {
                    return (
                        <YoutubeSlide
                            key={`ytv${i}`}
                            id={info.id}
                            play={playVideos[i]}
                            onPauseCB={resumeCarousel}
                            startAt={info.start && info.start} />
                    )
                })}
            </Carousel>
        </div>
    );
}

export default ManimYoutubeCarousel;
