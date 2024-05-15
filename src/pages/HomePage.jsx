import React from "react"
import headshotImage from "../assets/portfolio-headshot.jpeg"

function HomePage() {
    return (
        <>
            <h1>Mathew Uckele</h1>
            <img src={headshotImage} alt="headshot" className="headshot" />
            <h2 className="home-title">Full Stack Software Engineer</h2>
            <h4>Hi I'm Mathew Uckele As a versatile and results-driven Full Stack Computer Engineer, I combine a deep understanding of front-end and back-end technologies to deliver innovative and scalable solutions. With a proven track record of successfully navigating complex projects, I excel in designing and implementing robust applications that optimize user experiences and meet business objectives.
            My proficiency spans various programming languages, frameworks, and databases, allowing me to adapt seamlessly to evolving technological landscapes.</h4>
        </>
    )
}

export default HomePage 