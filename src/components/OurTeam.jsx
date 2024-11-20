import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import './styles.css';


const OurTeam = () => (
  <div className="about py-5 bg-light text-center">
    <div className="container">
      <h2 className="mb-4">
        <span>Our Team 我们的团队</span>
      </h2>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={team1}
            alt="Team 1"
            style={{
              height: '500px', // Consistent height
              objectFit: 'cover', // Ensures proper image scaling without stretching
            }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={team2}
            alt="Team 2"
            style={{
              height: '500px',
              objectFit: 'cover',
            }}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={team3}
            alt="Team 3"
            style={{
              height: '500px',
              objectFit: 'cover',
            }}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  </div>
);

export default OurTeam;
