import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo from '../assets/logo.jpg'; // Adjust path relative to HeroSection.jsx
import map from '../assets/map.jpg'; // Adjust path relative to HeroSection.jsx

const HeroSection = () => (
    <div className="hero text-center bg-light pt-5">
        {/* Logo in the top-left corner */}
        <div className="logo-container position-absolute top-0 start-0 p-3">
            <img
                src={logo}
                alt="Company Logo"
                style={{
                    height: '50px', // Reduce the logo height
                    width: 'auto',  // Maintain the aspect ratio
                }}
            />
        </div>

        {/* Hero content */}
        <div className="pt-5" style={{ margin: 0, padding: 0 }}>
            <div className="row" style={{ display: 'flex', alignItems: 'stretch' }}>
                {/* Top row with video carousel */}
                <div
                    className="col-12"
                    style={{
                        padding: 0, // Remove padding
                    }}
                >
                    <Carousel style={{ maxHeight: '400px', overflow: 'hidden', minHeight: '400px' }}>
                        <Carousel.Item>
                            <video
                                autoPlay
                                loop
                                muted
                                
                                style={{
                                    width: '100%', // Ensure the video stretches to full viewport width
                                    height: 'auto', // Adjust to maintain aspect ratio
                                    objectFit: 'cover', // Ensures the video covers the area without stretching
                                }}
                            >
                                <source src="/videos/intro.mp4" type="video/mp4" /> {/* Replace with your video URL */}
                                Your browser does not support the video tag.
                            </video>
                        </Carousel.Item>
                        <Carousel.Item>
                            <video
                                autoPlay
                                loop
                                muted
                                
                                style={{
                                    width: '100%',
                                    height: 'auto', // Adjust to maintain aspect ratio
                                    objectFit: 'cover',
                                }}
                            >
                                <source src="/videos/intro2.mp4" type="video/mp4" /> {/* Replace with your second video URL */}
                                Your browser does not support the video tag.
                            </video>
                        </Carousel.Item>
                    </Carousel>
                </div>
                {/* Bottom row with map image */}
                <div
                    className="col-12"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: 0, // Remove padding
                    }}
                >
                    <img
                        src={map}
                        alt="Map"
                        style={{
                            width: '100%', // Ensure the image stretches to full viewport width
                            height: '400px', // Adjust height as needed
                            objectFit: 'cover', // Ensures the image covers the area without stretching
                        }}
                    />
                </div>
            </div>
        </div>
    </div>
);

export default HeroSection;
