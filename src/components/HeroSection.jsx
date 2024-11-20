import React from 'react';
import logo from '../assets/logo.jpg'; // Adjust path relative to HeroSection.jsx
import map from '../assets/map.jpg'; // Adjust path relative to HeroSection.jsx
import profile from '../assets/profile.png'; // Adjust path relative to HeroSection.jsx

const HeroSection = () => (
    <div className="hero text-center bg-light py-5 position-relative">
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
        <div className="container py-5">
            <div className="row" style={{ display: 'flex', alignItems: 'stretch' }}>
                {/* Top row with map image */}
                <div className="col-12" style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={map}
                        alt="Map"
                        style={{
                            width: '100%', // Ensure the map stretches across the full width of the container
                            height: '250px', // Adjust height as needed
                            objectFit: 'cover', // Ensures the image covers the area without stretching
                            borderRadius: '15px',

                        }}
                    />
                </div>

                {/* Profile image in the middle of the two rows */}
                <div
                    className="profile-container d-flex justify-content-center align-items-center"
                    style={{
                        position: 'absolute',
                        top: '48%', // Adjust vertical position of the profile image
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: '10',
                    }}
                >
                    <img
                        src={profile}
                        alt="Profile"
                        style={{
                            height: '200px',
                            width: '200px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '3px solid #ddd',
                        }}
                    />
                </div>
            </div>

            {/* Bottom row with text and spans */}
            <div className="row text-center mt-3">
                <div className='col' style={{ marginTop: '100px' }}>  {/* Added marginTop */}
                    <p className="lead">
                        Discover luxurious properties tailored to your lifestyle.
                    </p>
                    <p className="lead">
                        <span style={{ display: 'block' }}>Name</span>
                        <span style={{ display: 'block' }}>XXX Group</span>
                        <span style={{ display: 'block' }}>0108887661</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default HeroSection;
