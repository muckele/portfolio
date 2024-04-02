import resume from '../assets/Mathew Uckele Resume 2024.pdf';
import "../assets/css/AboutPage.css"

function AboutPage() {
    return (
        <div className="about-container">
            <h1>About</h1>
            <div className="mission-statement">
                <p>As a versatile and results-driven Full Stack Computer Engineer, I combine a deep understanding of front-end and back-end technologies to deliver innovative and scalable solutions. With a proven track record of successfully navigating complex projects, I excel in designing and implementing robust applications that optimize user experiences and meet business objectives. My proficiency spans a wide range of programming languages, frameworks, and databases, allowing me to adapt seamlessly to evolving technological landscapes. </p>
            </div>
            <div className="resume-section">
                <h2>Resume</h2>
                <span>Download my <a href={resume} className='resume-link'>resume</a></span>
            </div>
            <div className="favorite-section">
                <h2>Favorite Books</h2>
                <ul className="favorite-list">
                    <li>George R. R. Martin's A Game of Thrones Song of Ice and Fire Series</li>
                    <li>A Brave New World by Aldous Huxley</li>
                    <li>Steve Jobs by Walter Isaacson</li>
                    <li>The Lord of the Rings by J.R.R. Tolkien</li>
                    <li>Elon Musk by Walter Isaacson</li>
                </ul>
                <h2>Favorite TV Shows</h2>
                <ul className="favorite-list">
                    <li>Game of Thrones</li>
                    <li>Breaking Bad</li>
                    <li>The Sopranos</li>
                    <li>Seinfeld</li>
                    <li>Schitt's Creek</li>
                </ul>
            </div>
            {/* Add Hobbies */}
        </div>
    );
}

export default AboutPage;
