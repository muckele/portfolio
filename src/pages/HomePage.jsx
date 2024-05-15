import React from "react";
import headshotImage from "../assets/portfolio-headshot.jpeg";
import '../assets/css/HomePage.css';

function HomePage() {
    return (
        <>
            <h1>Mathew Uckele</h1>
            <img src={headshotImage} alt="headshot" className="headshot" />
            <h2 className="home-title">Full Stack Software Engineer</h2>
            <h4>
                Hi I'm Mathew Uckele. As a versatile and results-driven Full Stack
                Computer Engineer, I combine a deep understanding of front-end and
                back-end technologies to deliver innovative and scalable solutions. With
                a proven track record of successfully navigating complex projects, I excel
                in designing and implementing robust applications that optimize user
                experiences and meet business objectives.
            </h4>
            <p>
                My proficiency spans various programming languages, frameworks, and
                databases, allowing me to adapt seamlessly to evolving technological
                landscapes.
            </p>
            <div className="row">
                <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                    <div className="services color-1">
                        <span className="icon2"><i className="icon-bulb"></i></span>
                        <h3>Marketing</h3>
                    </div>
                </div>
                <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                    <div className="services color-1">
                        <span className="icon2"><i className="icon-bulb"></i></span>
                        <h3>Sales</h3>
                    </div>
                </div>
                <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                    <div className="services color-2">
                        <span className="icon2"><i className="icon-globe-outline"></i></span>
                        <h3>Web Design</h3>
                    </div>
                </div>
                <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                    <div className="services color-3">
                        <span className="icon2"><i className="icon-data"></i></span>
                        <h3>Software</h3>
                    </div>
                </div>
                <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                    <div className="services color-4">
                        <span className="icon2"><i className="icon-phone3"></i></span>
                        <h3>Application</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                    <div className="hire">
                        <h2>I am happy to know you that 100+ projects done successfully!</h2>
                        <a href="#" className="btn-hire">Hire me</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
