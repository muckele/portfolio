import React from "react"
import headshotImage from "../assets/portfolio-headshot.jpeg"

function HomePage() {
    return (
        <>
            <h1>Mathew Uckele</h1>
            <img src={headshotImage} alt="headshot" className="headshot" />
            <h2 className="home-title">Full Stack Software Engineer</h2>
            <h4>Empowering businesses with adaptable and versatile full-stack solutions, driven by a passion for quality and innovation.</h4>
        </>
    )
}

export default HomePage 