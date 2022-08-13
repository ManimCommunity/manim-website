import React, {useState} from "react";
import ReactPlayer from "react-player/lazy";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Link} from "gatsby";

import {YouTubeIcon} from "./icons";
import "./manim-youtube-carousel.scss";

const CAROUSEL_SPEED = 3000;
const VIDEO_IDS = [
    "GiDsjIBOVoA",
    "AM6BY4btj-M",
    "NdqaX9aLkg8",
];

const YoutubeSlide = ({
    id,
    isSelected,
    play = false,
}) => {
    return (
        <div className="yt-slide">
            <ReactPlayer
                height={"100%"}
                width={"100%"}
                url={`https://www.youtube.com/embed/${id}`}
                light={
                    play
                        ? false
                        : `https://i.ytimg.com/vi_webp/${id}/hqdefault.webp`
                }
                playIcon={<YouTubeIcon play_fill="#fff" width={64} />}
                controls={true}
                playing={isSelected}
            />
        </div>
    );
};

const ManimYoutubeCarousel = () => {
    const [playVideos, setPlayVideos] = useState(VIDEO_IDS.map(() => false));
    const [autoPlay, setAutoPlay] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedSlide, setSelectedSlide] = useState(0);

    const onChangeCarousel = i => {
        setAutoPlay(true);
        setPlayVideos(playVideos.map(() => false));
        if (i === currentSlide) setSelectedSlide(i);
        if (selectedSlide === currentSlide) setSelectedSlide(0);
        setCurrentSlide(i);
    };

    const onClickCarousel = i => {
        setAutoPlay(false);
        setPlayVideos(playVideos.map((_, idx) => idx === i));
    };

    const customRenderItem = (item, props) => (
        <item.type {...item.props} {...props} />
    );

    return (
        <div className="youtube-carousel-div">
            <YouTubeIcon />
            <h2>Made With Manim</h2>
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
                {VIDEO_IDS.map((id, i) => {
                    return (
                        <YoutubeSlide
                            key={`ytv${i}`}
                            id={id}
                            play={playVideos[i]}
                        />
                    );
                })}
            </Carousel>
            <Link to="/awesome" className="more-manim-link">
                More Made With Manim
            </Link>
        </div>
    );
};

export default ManimYoutubeCarousel;
