import React from "react";
import Logo from "../assets/background1.svg"

export default function Head() {
    return (
        <section className=
            "flex flex-col min-h-screen min-w-screen"
        style={{
            backgroundImage: `url(${Logo})`,
            backgroundSize: "795px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right top",
        }}>
            <div className="flex">
                <h1>a</h1>
            </div>

            <div>
                <h1>a</h1>
            </div>
        </section>
    )
}