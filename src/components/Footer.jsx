import React from 'react';
import xiaohongshu from '../assets/xhslogo.png';

const Footer = () => (
  <footer className="bg-light p-4 shadow-lg">
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center text-center text-md-start">
        {/* Left Column */}
        <div className="col-md-4 mb-3 mb-md-0">
          <span className="d-block text-muted">
            B-03-14, BLOCK B 1TEBRAU, <br />
            Jalan Tebrau, KG SETANGGI, <br />
            80250 Johor Bahru, Johor
          </span>
        </div>

        {/* Center Column */}
        <div
          className="col-md-4 mb-3 mb-md-0 px-4 py-3 bg-white shadow-sm"
          style={{
            borderRadius: '15px',
          }}
        >
          <span className="d-block text-dark">
            “Don’t wait to buy real estate, buy real estate and wait. 不要等待购买房地产，⽽是购买并等待”
            <br />
            <small className="text-muted">– Will Rogers</small>
          </span>
        </div>

        {/* Right Column */}
        <div className="col-md-4 text-center fw-bold">
          <p className="text-muted mb-2">Contac Us</p>
          <div>
            <a href="https://www.facebook.com/share/15eAq8Xhqd/?mibextid=LQQJ4d" className="text-primary mx-2" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook fs-4"></i>
            </a>
            <a href="https://www.tiktok.com/@ivanin.the.house?_t=8rsPifQEiSC&_r=1" className="text-danger mx-2" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram fs-4"></i>
            </a>
            <a href="https://wa.me/60136152313" className="text-success mx-2" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp fs-4"></i>
            </a>
            <a href="https://www.xiaohongshu.com/user/profile/620603080000000010007c33?xhsshare=CopyLink&appuid=620603080000000010007c33&apptime=1733131143&share_id=1e8326b5e7bd4e7bbe03b5726d3b8030" className="text-warning mx-2" target="_blank" rel="noopener noreferrer">
              <img
                src={xiaohongshu}
                alt="Xiao Hong Shu Logo"
                style={{
                  height: '30px',
                  'margin-bottom': '12px', 
                  width: 'auto',
                }}
              />
            </a>
          </div>
        </div>
      </div>

      <div className='row mt-5 text-center'>
        <p className="text-muted mb-2">© 2024 Property Co. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
