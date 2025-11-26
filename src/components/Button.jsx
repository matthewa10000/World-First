import React from "react";

const Button = ({ text, link = "#", className = "", animation = false, target = '_blank' }) => {
    return (
        <a
            href={link}
            className={`button-animate inline-block cursor-pointer px-4 py-2 rounded-md font-medium ${className}`}
            target={target}
        >
            {animation && (
                <>
                    <span className="absolute top-0 -left-full w-full h-0.5 bg-[linear-gradient(90deg,transparent,#ba00fb)] animate-btn-anim1"></span>
                    <span className="absolute -top-full right-0 w-0.5 h-full bg-[linear-gradient(180deg,transparent,#ba00fb)] animate-btn-anim2"></span>
                    <span className="absolute bottom-0 -right-full w-full h-0.5 bg-[linear-gradient(270deg,transparent,#ba00fb)] animate-btn-anim3"></span>
                    <span className="absolute -bottom-full left-0 w-0.5 h-full bg-[linear-gradient(360deg,transparent,#ba00fb)] animate-btn-anim4"></span>
                </>
            )}
            <p >{text}</p>
        </a>
    );
};

export default Button;
