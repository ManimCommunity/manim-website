import * as React from "react";
import * as ReactDOM from "react-dom";
import NavBar from "../components/navbar.js";
import {Footer} from "../components/footer.js";
import {default as InfiniteScroll} from "infinite-scroll";
import $ from "jquery";
import "./awesome.scss";
import "@fortawesome/fontawesome-free/css/all.css";

const DATA_PATH = "https://awesome-manim.uc.r.appspot.com/videos/";

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

function setPage(rows) {
    // I've tried to do the following the React way, but couldn't find a straightforward way.
    // The JSX elements need to be rendered as HTML elements and passed to the infinite scroll object
    // Feel free to correct this if you know how to do it.
    let result = "";
    rows.forEach(row => {
        result =
            result +
            "<div class='video-card'>" +
            "<a target='_blank' href='" +
            row.link +
            "'>" +
            // "<img width='1280px' height='720px' src='" +
            // "<img width='128px' height='72px' src='" +
            "<img src='" +
            row.thumbnail_url +
            "' class='thumbnail'/>" +
            "<div class='card-title'>" +
            "<div class='video-title'>" +
            row.title +
            "</div>" +
            "</a>" +
            "<div class='video-author'>" +
            `<a target="_blank", href='https://youtube.com/channel/${row.yt_channelid}'>${row.author}</a>` +
            "</div>" +
            "<div class='video-date'>" +
            formatNumber(row.view_count) +
            " views • " +
            new Date(row.published).toLocaleDateString() +
            "</div>" +
            "</div></div>";
    });
    // let result = rows.map(row => {
    //     return (
    //         <div class="card">
    //             <a target="_blank" href={row.link}>
    //                 <img
    //                     width="1280px"
    //                     height="720px"
    //                     src={row.thumbnail_url}
    //                     class="thumbnail"
    //                 />
    //                 <div class="card-title">
    //                     <div class="video-title">{row.title}</div>
    //                 </div>
    //             </a>
    //             <div class="video-author">
    //                 <a target="_blank" href={'https://youtube.com/channel/${row.yt_channelid}'}>{row.author}</a>
    //             </div>
    //             <div class="video-date">
    //                 {formatNumber(row.view_count)} views •{" "}
    //                 {new Date(row.published).toLocaleDateString()}
    //             </div>
    //         </div>
    //     );
    // });
    // console.log(result)
    return result;
}

class IndexPage extends React.Component {
    componentDidMount() {
        let container = document.querySelector("#videos");

        let infScroll = new InfiniteScroll(container, {
            path: function () {
                console.log("Loading new page");
                return DATA_PATH + `${this.pageIndex}`;
            },
            // append: ".card",
            history: false,
            responseBody: "json",
            status: ".page-load-status"
        });

        infScroll.on("load", function (data, path, response) {
            let items = $(setPage(data.data));
            infScroll.appendItems(items);
        });

        infScroll.loadNextPage();
    }
    render() {
        return (
            <div>
                <title>Made with Manim</title>
                <NavBar />
                <main className="main-div">
                    <div className="wrapper">
                        <h1>Made with Manim</h1>
                        <p>
                            Lectures and explainers on YouTube which are made with Manim. This feed is
                            auto-generated using channels featured in the GitHub
                            repo{" "}
                            <a
                                target="_blank"
                                href="https://github.com/ManimCommunity/awesome-manim"
                            >
                                ManimCommunity/awesome-manim
                            </a>
                            .
                        </p>
                        <div className="home">
                            <div id="videos" className="card-container"></div>
                            <div className="page-load-status">
                                <div className="infinite-scroll-request">
                                    <div className="card-container">
                                        <div className="video-card card-empty">
                                            <div className="card-loading"></div>
                                        </div>
                                        <div className="video-card card-empty">
                                            <div className="card-loading"></div>
                                        </div>
                                        <div className="video-card card-empty">
                                            <div className="card-loading"></div>
                                        </div>
                                    </div>
                                </div>
                                <p className="infinite-scroll-last">
                                    End of content
                                </p>
                                <p className="infinite-scroll-error">
                                    No more pages to load
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default IndexPage;
