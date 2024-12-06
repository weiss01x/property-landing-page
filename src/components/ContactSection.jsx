import React from 'react';
import fb from '../assets/fblogo.png';
import insta from '../assets/instaLogo.png';
import whatsapp from '../assets/whatsapplogo.png';
import xiaohongshu from '../assets/xhslogo.png';
import goldBg from '../assets/gold-bg.jpg'; // Adjust path relative to HeroSection.jsx

const ContactSection = () => (
    <div className="contact py-5 bg-light"
        style={{

            backgroundImage: `url(${goldBg})`, // Use imported background image
            backgroundSize: 'cover',         // Ensures the image covers the container
            backgroundPosition: 'center',   // Centers the image
            backgroundRepeat: 'no-repeat',  // Prevents the image from tiling
        }}>
        <div className="container p-5">
            <h1 className="mb-5 text-center text-white" style={{ fontFamily: '"Roboto", sans-serif' }}>
                IVAN IN THE HOUSE
            </h1>

            <div className='row justify-content-around align-items-center text-center'>
                {/* Facebook */}
                <div className='col-auto d-flex flex-column align-items-center'>
                    <img
                        src={fb}
                        alt="Facebook Logo"
                        style={{
                            height: '100px',
                            width: 'auto',
                        }}
                        onClick={() => window.open("https://www.facebook.com/share/15eAq8Xhqd/?mibextid=LQQJ4d", "_blank")}
                    />
                    <span className='text-white'>Facebook</span>
                </div>

                {/* Instagram */}
                <div className='col-auto d-flex flex-column align-items-center'>
                    <img
                        src={insta}
                        alt="Instagram Logo"
                        style={{
                            height: '100px',
                            width: 'auto',
                        }}
                        onClick={() => window.open("https://www.tiktok.com/@ivanin.the.house?_t=8rsPifQEiSC&_r=1", "_blank")}
                    />
                    <span className='text-white'>Instagram</span>
                </div>

                {/* WhatsApp */}
                <div className='col-auto d-flex flex-column align-items-center'>
                    <img
                        src={whatsapp}
                        alt="WhatsApp Logo"
                        style={{
                            height: '100px',
                            width: 'auto',
                        }}
                        onClick={() => window.open("https://wa.me/60136152313", "_blank")}
                    />
                    <span className='text-white'>+60136152313</span>
                </div>

                {/* Xiao Hong Shu */}
                <div className='col-auto d-flex flex-column align-items-center'>
                    <img
                        src={xiaohongshu}
                        alt="Xiao Hong Shu Logo"
                        style={{
                            height: '100px',
                            width: 'auto',
                        }}
                        onClick={() => window.open("https://www.xiaohongshu.com/user/profile/620603080000000010007c33?xhsshare=CopyLink&appuid=620603080000000010007c33&apptime=1733131143&share_id=1e8326b5e7bd4e7bbe03b5726d3b8030", "_blank")}
                    />
                    <span className='text-white'>Xiao Hong Shu</span>
                </div>
            </div>

        </div>
    </div>
);

export default ContactSection;
