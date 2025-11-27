import React, { useEffect } from "react";

const ElfsightWidget = () => {
    useEffect(() => {
        if (!document.getElementById("elfsight-script")) {
            const script = document.createElement("script");
            script.id = "elfsight-script"; // prevent multiple injections
            script.src = "https://elfsightcdn.com/platform.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div
            className="elfsight-app-097f138c-cce1-4bcc-b356-8ea85d3f69fe"
            data-elfsight-app-lazy
        ></div>
    );
};

export default ElfsightWidget;
