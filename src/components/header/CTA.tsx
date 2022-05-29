import React from "react";
import  pdf from "../../assets/cv.pdf";

export const CTA = () => {
    return (
        <div className="cta">
            <a href={pdf} download className="btn">Download CV</a>
            <a href="#" className="btn btn-primary"> Let's Talk</a>
        </div>
    );
}