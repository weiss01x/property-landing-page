import React from 'react';
import logo from '../assets/logo.jpg'; // Adjust path relative to HeroSection.jsx
import map from '../assets/map.jpg'; // Adjust path relative to HeroSection.jsx

const HeroSection = () => (
    <div className="hero text-center bg-light pt-5 position-relative">
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
                {/* Top row with video */}
                <div
                    className="col-12"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: 0, // Remove padding
                    }}
                >
                    <video autoPlay loop muted
                        controls
                        style={{
                            width: '100vw', // Ensure the video stretches to full viewport width
                            height: '400px', // Adjust height as needed
                            objectFit: 'cover', // Ensures the video covers the area without stretching
                            borderRadius: '0', // Optional: Remove border radius for edge-to-edge display
                        }}
                    >
                        <source src="/videos/intro.mp4" type="video/mp4" /> {/* Replace with your video URL */}
                        Your browser does not support the video tag.
                    </video>
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
                            width: '100vw', // Ensure the image stretches to full viewport width
                            height: '400px', // Adjust height as needed
                            objectFit: 'cover', // Ensures the image covers the area without stretching
                            borderRadius: '0', // Optional: Remove border radius for edge-to-edge display
                        }}
                    />
                </div>
            </div>
        </div>
    </div>
);

export default HeroSection;
