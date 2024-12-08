import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './styles.css';

const teamData = [
  {
    image: '/images/ourTeam/3edb3c83-c90b-4172-8009-2a6394f24b71.JPG',
    alt: 'Team 1',
  },
  {
    image: '/images/ourTeam/7b46f4c1-0c54-4f92-9e8b-234139234848.JPG',
    alt: 'Team 2',
  },
  {
    image: '/images/ourTeam/78c0e4b5-e34b-4774-b4e4-f6f2edc88304.JPG',
    alt: 'Team 3',
  },
  {
    image: '/images/ourTeam/5072f8ab-e3d7-4a80-b667-439d8aae5643.JPG',
    alt: 'Team 4',
  },
  {
    image: '/images/ourTeam/bed520ed-60f8-4f3b-9b13-a29805d098dc.JPG',
    alt: 'Team 5',
  },
  {
    image: '/images/ourTeam/d676375e-f463-4b48-b4b6-6520a000c7cd.JPG',
    alt: 'Team 6',
  },
];

const OurTeam = () => (
  <div className="about py-5 bg-light text-center">
    <div className="container">
      <h2 className="mb-4">
        <span>Our Team 我们的团队</span>
      </h2>

      <Carousel wrap interval={3000} fade>
        {teamData.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="team-image img-fluid mx-auto"
              src={item.image}
              alt={item.alt}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  </div>
);

export default OurTeam;
