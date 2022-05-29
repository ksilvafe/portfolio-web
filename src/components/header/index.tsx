import React from "react";
import { CTA } from "./CTA";


export const Header = () => {
    return (    
        <header>
            <div className="container">
                <h5>Hi Guys</h5>
                <h1>Kevin Ferreira</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA />
            </div>
        </header>
    );
}