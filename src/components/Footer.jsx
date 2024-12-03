import React from 'react';

const Footer = () => (
  <footer className="bg-light p-4 shadow-lg">
  <div className="container">
    <div className="row d-flex justify-content-center align-items-center text-center text-md-start">
      {/* Left Column */}
      <div className="col-md-4 mb-3 mb-md-0">
        <span className="d-block text-muted">
          Address 1.<br />
          Address 2.
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
          <a href="#facebook" className="text-primary mx-2">
            <i className="bi bi-facebook fs-4"></i>
          </a>
          <a href="#twitter" className="text-info mx-2">
            <i className="bi bi-twitter fs-4"></i>
          </a>
          <a href="#instagram" className="text-danger mx-2">
            <i className="bi bi-instagram fs-4"></i>
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
