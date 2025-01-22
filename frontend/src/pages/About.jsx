import React from 'react';
import './About.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    const developers = [
        {
            name: "Yashodip Jagtap",
            roll: "Roll No. 11",
            role: "Full Stack Developer",
            slogan: "Turning visions into reality, one pixel at a time.",
            image: "/images/dev1.jpg",
        },
        {
            name: "Harshal Chavan",
            roll: "Roll No. 10",
            role: "Full Stack Developer",
            slogan: "Building logic that powers your experience.",
            image: "/images/dev2.png",
        },
        {
            name: "Rakesh Kummari",
            roll: "Roll No. 48",
            role: "Full Stack Developer",
            slogan: "Optimizing data for seamless performance.",
            image: "/images/dev3.png",
        },
        {
            name: "Banesh Durgam",
            roll: "Roll No. 49",
            role: "UI/UX Designer",
            slogan: "Designing experiences that users love.",
            image: "/images/dev4.png",
        },
    ];

    return (
        <>
            <Navbar />
            <div className="about-container">
                <section className="team-section">
                    <h2>Meet Our Team</h2>
                    <div className="team-grid">
                        {developers.map((dev, index) => (
                            <div key={index} className="team-card">
                                <div className="image-wrapper">
                                    <img src={dev.image} alt={dev.name} className="team-image" />
                                </div>
                                <h3>{dev.name}</h3>
                                <p className="roll">{dev.roll}</p>
                                <p className="role">{dev.role}</p>
                                <p className="slogan">"{dev.slogan}"</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="technology-section">
                    <h2>Technology Behind Podcast Sphere</h2>
                    <p>
                        Our platform is built using modern web technologies to ensure a smooth and responsive user experience.
                        Here's a look at the tools and technologies we’ve used:
                    </p>
                    <ul>
                        <li><strong>Frontend:</strong> React.js for dynamic and interactive UI components.</li>
                        <li><strong>Backend:</strong> Node.js and Express.js for server-side operations.</li>
                        <li><strong>Database:</strong> MongoDB for efficient data management.</li>
                        <li><strong>Dependencies:</strong> debug, dotenv, ejs, http-errors, jsonwebtoken, mongoose, bcryptjs, cookie-parser, multer, morgan, cors</li>
                    </ul>
                </section>
                <Footer />
            </div>
        </>
    );
};

export default About;
