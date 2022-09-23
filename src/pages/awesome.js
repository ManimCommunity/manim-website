import React, {useCallback, useEffect, useRef, useState} from "react";
import axios from 'axios';
import {v4} from 'uuid';
import "@fortawesome/fontawesome-free/css/all.css";

import SEO from "../components/seo";
import NavBar from "../components/navbar.js";
import {Footer} from "../components/footer.js";
import AwesomeCard from "../components/awesome-card.js";
import "./awesome.scss";

const useGetAwesomeVideos = (page) => {
    const [hasNextPage, setHasNextPage] = useState(false);
    const [loading, setLoading] = useState(true);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        setLoading(true)
        axios({
            method: 'GET',
            url: `https://api.manim.community/videos/${page}`
        })
            .then (res=> {
                setVideos(prev => [...prev, ...res.data.data]);
                setHasNextPage(res.data.data.length > 0);
                setLoading(false);
            })
            .catch(e => {
                setLoading(false);
            });

    }, [page]);
    return {hasNextPage, loading, videos}
}

const AwesomePage = () => {
    const [page, setPage] = useState(1);
    const {videos, loading, hasNextPage} = useGetAwesomeVideos(page);
    const observer = useRef();

    const lastVidRef = useCallback(vid => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(vids => {
            if (vids[0].isIntersecting && hasNextPage) setPage(prev => prev + 1);
        });
        if (vid) observer.current.observe(vid);
    }, [loading, hasNextPage]);

    return (
        <>
            <SEO
                title="Made with Manim"
                description="Lectures and explainers on YouTube which are made with Manim."
            />
            <NavBar />
            <main className="main-div">
                <h1>Made with Manim</h1>
                <p>
                    Lectures and explainers on YouTube which are made with Manim. This feed is
                    auto-generated using channels featured in the GitHub
                    repo{" "}
                    <a
                        target="_blank"
                        href="https://github.com/ManimCommunity/awesome-manim"
                        rel="noreferrer"
                    >
                        ManimCommunity/awesome-manim
                    </a>
                    .
                </p>
                <div className="home">
                    <div id="videos" className="card-container">
                        {videos.map((vid, i) => {
                            if (videos.length === i+1) {
                                return <AwesomeCard ref={lastVidRef} key={`v${i}`} info={vid} />
                            }
                            return <AwesomeCard key={`v${i}`} info={vid} />
                        })}
                        {loading 
                            && [...Array(6)].map(_ => {
                                    return (
                                        <div key={v4()} className="video-card">
                                            {[...Array(4)].map(_ => {
                                                return (
                                                    <div key={v4()} className="loading-container">
                                                        <div className="content-loading" />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })
                        }
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default AwesomePage;
