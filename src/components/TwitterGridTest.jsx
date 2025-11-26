import React, { useEffect } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const tweetIds = [
    "1936088405479506346", // replace with actual tweet IDs from Me3Labs
    "1993235420155724246",
    "1992833021620482127",
];

const TwitterGridTest = () => {
    // Load Twitter widgets script
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px",
                padding: "20px",
            }}
        >
            {tweetIds.map((id) => (
                <TwitterTweetEmbed key={id} tweetId={id} />
            ))}
        </div>
    );
};

export default TwitterGridTest;
