import React from 'react';
import fb from '../assets/fblogo.png';
import insta from '../assets/instaLogo.png';
import whatsapp from '../assets/whatsapplogo.png';
import goldBg from '../assets/gold-bg.jpg'; // Adjust path relative to HeroSection.jsx

const ContactSection = () => (
    <div className="contact py-5 bg-light"
        style={{

            backgroundImage: `url(${goldBg})`, // Use imported background image
            backgroundSize: 'cover',         // Ensures the image covers the container
            backgroundPosition: 'center',   // Centers the image
            backgroundRepeat: 'no-repeat',  // Prevents the image from tiling
        }}>
        <div className="container p-5"
        >
            <h1 className="mb-5 text-center text-white" style={{ fontFamily: '"Roboto", sans-serif' }}>
                IVAN IN THE HOUSE
            </h1>

            <div className='row justify-content-around align-items-center text-center'>
                <div className='col-auto'>
                    <img
                        src={fb}
                        alt="Company Logo"
                        style={{
                            height: '100px', // Reduce the logo height
                            width: 'auto',  // Maintain the aspect ratio
                        }}
                    />
                </div>

                <div className='col-auto'>
                    <img
                        src={insta}
                        alt="Company Logo"
                        style={{
                            height: '100px', // Reduce the logo height
                            width: 'auto',  // Maintain the aspect ratio
                        }}
                    />
                </div>

                <div className='col-auto'>
                    <img
                        src={whatsapp}
                        alt="Company Logo"
                        style={{
                            height: '100px', // Reduce the logo height
                            width: 'auto',  // Maintain the aspect ratio
                        }}
                    />
                </div>
            </div>
        </div>
    </div>
);

export default ContactSection;
