import React from 'react';

const ranges = [
    {
        divider: 1e3,
        suffix: "K"
    },
    {
        divider: 1e6,
        suffix: "M"
    },
    {
        divider: 1e9,
        suffix: "B"
    }
];

function formatNumber(input) {
    for (let index = ranges.length - 1; index >= 0; index--) {
        if (input > ranges[index].divider) {
            let quotient = input / ranges[index].divider;

            if (quotient < 10) {
                quotient = Math.floor(quotient * 10) / 10;
            } else {
                quotient = Math.floor(quotient);
            }

            return quotient.toString() + ranges[index].suffix;
        }
    }

    return input.toString();
}

const AwesomeCard = React.forwardRef(({info}, ref) => {
    const cardBody = (
        <>
            <a target="_blank" href={info.link} rel="noreferrer">
                <img
                    className="thumbnail"
                    src={`https://i.ytimg.com/vi_webp/${info.yt_videoid}/hqdefault.webp`}
                    alt={`YouTube thumbnail for ${info.title}`}
                />
                <div className="card-title">
                    <div className="video-title">{info.title}</div>
                </div>
            </a>
            <div className="video-author">
                <a target="_blank" rel="noreferrer" href={`https://youtube.com/channel/${info.yt_channelid}`}>
                    {info.author}
                </a>
            </div>
            <div class="video-date">
                {formatNumber(info.view_count)} views •{" "}
                {new Date(info.published).toLocaleDateString()}
            </div>
        </>
    )

    const videoCard = ref
        ? <div ref={ref} className="video-card fade-in">{cardBody}</div>
        : <div className="video-card fade-in">{cardBody}</div>

    return videoCard;
});

export default AwesomeCard;
