import * as React from "react";
import "./plugin_div.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPython} from "@fortawesome/free-brands-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";

export default function PluginDiv({element}) {
    let date1 = element.urls[0].upload_time_iso_8601;
    return (
        <div class="child-plugin-div hover-card">
            <strong class="author-name">{element.info.author}</strong>
            <h3 class="plugin-name">
                {element.info.name} v{element.info.version}
            </h3>
            <div class="plugin-date text-muted">{date1}</div>
            <p class="plugin-summary">{element.info.summary}</p>
            <div class="row no-gutters flex-md-row position-relative">
                <a
                    href={element.info.package_url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button type="button" class="btn btn-outline-primary m-1">
                        <FontAwesomeIcon icon={faPython} /> PyPi Page
                    </button>
                </a>
                <a
                    href={element.info.home_page}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button type="button" class="btn btn-outline-info m-1">
                        <FontAwesomeIcon icon={faHome} /> Home Page
                    </button>
                </a>
            </div>
        </div>
    );
}
