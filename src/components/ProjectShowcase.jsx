import React, { useState, useRef } from 'react';
import { Accordion, Card, Carousel, Button } from 'react-bootstrap';
import projectBg  from '../assets/projectBg.png'; // Adjust path relative to HeroSection.jsx

const tieredProjects = {
  "🏆【Tier 1】 ⾛路可以到关卡/RTS": [
    {
      id: 1,
      title: "C@CIQ",
      images: ['/images/projects/Tier 1/新时代CIQ/1.jpeg', '/images/projects/Tier 1/新时代CIQ/2.jpeg', '/images/projects/Tier 1/新时代CIQ/3.jpeg'],
      location: "CIQ",
      descriptions: [
        '2029 Q2 拿钥匙',
        'RM570k ~RM900k',
        'Dualkey 房款 适合投资',
        '⾛路 1km 到 CIQ/RTS',
        '租⾦ ROI ⾼达 8%++',
      ],
    },
    {
      id: 2,
      title: "RNF@CIQ",
      images: ['/images/projects/Tier 1/RNF CIQ/1.jpeg', '/images/projects/Tier 1/RNF CIQ/2.jpeg', '/images/projects/Tier 1/RNF CIQ/3.jpeg'],
      location: "CIQ",
      descriptions: [
        'Phase 1/ 2 已经完⼯',
        'RM530k ~RM2mil',
        '有 link bridge 通去 CIQ/RTS',
        'Township 项⽬，楼下有 shopping mall',
        'Phase 3 coming soon...',
      ],
    },
    {
      id: 3,
      title: "MajesSc Genrise@CIQ",
      images: ['/images/projects/Tier 1/Majestic Genrise/1.jpeg', '/images/projects/Tier 1/Majestic Genrise/2.jpeg', '/images/projects/Tier 1/Majestic Genrise/3.jpeg', '/images/projects/Tier 1/Majestic Genrise/4.jpeg', '/images/projects/Tier 1/Majestic Genrise/5.jpeg'],
      location: "CIQ",
      descriptions: [
        '2028 Q1 拿钥匙（esSmated）',
        'RM560k ~RM2.1mil',
        '⾛路650m 到 CIQ/RTS',
        '全程有⾬盖 walkway',
        '租⾦ ROI ⾼达 8%++',
      ],
    },
    {
      id: 4,
      title: "Coronade@CIQ",
      images: ['/images/projects/Tier 1/Coronade/1.jpeg', '/images/projects/Tier 1/Coronade/2.jpeg', '/images/projects/Tier 1/Coronade/3.jpeg', '/images/projects/Tier 1/Coronade/4.jpeg'],
      location: "CIQ",
      descriptions: [
        'Phase 1 已经 sold out❌',
        'RM370k ~RM880k',
        '有 link bridge 350m 通去 RTS',
        'Township 项⽬，楼下有 shopping mall',
        'Phase 2 coming soon...',
      ],
    },
  ],
  "🏆【Tier 2】⼗分钟以内到关卡/RTS": [
    {
      id: 5,
      title: "Paragon Signature@Abdul Samad",
      images: ['/images/projects/Tier 2/Paragon Signature/1.jpeg', '/images/projects/Tier 2/Paragon Signature/2.jpeg', '/images/projects/Tier 2/Paragon Signature/3.jpeg', '/images/projects/Tier 2/Paragon Signature/4.jpeg'],
      location: "Abdul Samad",
      descriptions: [
        '2028 Q4 拿钥匙',
        'RM498k ~RM580k',
        '高⻓酒店风格公寓',
        '都是小房型，送浴缸',
        '有海景，适合投资 Airbnb',
      ],
    },
    {
      id: 6,
      title: "Paragon Gateway@Suria",
      images: ['/images/projects/Tier 2/Paragon Gateway/1.jpeg', '/images/projects/Tier 2/Paragon Gateway/2.jpeg', '/images/projects/Tier 2/Paragon Gateway/3.jpeg', '/images/projects/Tier 2/Paragon Gateway/4.jpeg', '/images/projects/Tier 2/Paragon Gateway/5.jpeg', '/images/projects/Tier 2/Paragon Gateway/6.jpeg', '/images/projects/Tier 2/Paragon Gateway/7.jpeg', '/images/projects/Tier 2/Paragon Gateway/8.jpeg'],
      location: "Suria",
      descriptions: [
        '2027 Q4 拿钥匙',
        'RM420k ~RM930k',
        '市中⼼5 分钟到 Ksl/Midvalley',
        '楼下48间店屋，对面是 Giant',
        '适合⾃⼰住的豪华公寓',
      ],
    },
    {
      id: 7,
      title: "MBW Bay@Danga Bay",
      images: ['/images/projects/Tier 2/MBW Bay/1.jpeg', '/images/projects/Tier 2/MBW Bay/2.jpeg', '/images/projects/Tier 2/MBW Bay/3.jpeg', '/images/projects/Tier 2/MBW Bay/4.jpeg'],
      location: "Danga Bay",
      descriptions: [
        '2026 Q2 拿钥匙',
        'RM460k ~RM850k',
        'Township 项⽬，楼下就有很多店⾯，方便性高~',
        '性价比高的海景房，设施超多',
        '很快完工+低头期',
      ],
    },
    {
      id: 8,
      title: "Avenue@MBW City",
      images: ['/images/projects/Tier 2/Avenue/1.jpeg', '/images/projects/Tier 2/Avenue/2.jpeg', '/images/projects/Tier 2/Avenue/3.jpeg', '/images/projects/Tier 2/Avenue/4.jpeg', '/images/projects/Tier 2/Avenue/5.jpeg', '/images/projects/Tier 2/Paragon Gateway/6.jpeg'],
      location: "MBW City",
      descriptions: [
        '2027 Q4 拿钥匙',
        'RM390k ~RM780k',
        '开车3分钟到Ciq/Rts',
        '高性价比(低月供，高租金)',
      ],
    },
    {
      id: 9,
      title: "Country Garden@Danga Bay",
      images: ['/images/projects/Tier 2/Country Garden/1.jpeg', '/images/projects/Tier 2/Country Garden/2.jpeg', '/images/projects/Tier 2/Country Garden/3.jpeg'],
      location: "Danga Bay",
      descriptions: [
        '完工项目',
        'RM500k ~RM1.1mil',
        'Township 项⽬，楼下就有很多店⾯，方便性高~',
        '有海景，沙滩~',
        '送冰箱，洗衣机和冷气',
      ],
    },
  ],
  "🏆【Tier 3】15 分钟内到关卡/RTS": [
    {
      id: 10,
      title: "Marina Residence@Bayu",
      images: ['/images/projects/Tier 3/Marina Residences/1.jpeg', '/images/projects/Tier 3/Marina Residences/2.jpeg', '/images/projects/Tier 3/Marina Residences/3.jpeg', '/images/projects/Tier 3/Marina Residences/4.jpeg', '/images/projects/Tier 3/Marina Residences/5.jpeg'],
      location: "Bayu",
      descriptions: [
        '完工项目',
        'RM628k ~RM775k',
        '都是大房款',
        '低密度公寓 只有 168 间',
        '部分房款 Free 全家私装修',
      ],
    },
    {
      id: 11,
      title: "Waterway Peaks@Senibong",
      images: ['/images/projects/Tier 3/Waterway Peaks/1.jpeg', '/images/projects/Tier 3/Waterway Peaks/2.jpeg', '/images/projects/Tier 3/Waterway Peaks/3.jpeg', '/images/projects/Tier 3/Waterway Peaks/4.jpeg'],
      location: "Senibong",
      descriptions: [
        '2027 Q1 拿钥匙',
        'RM620k ~RM770k',
        '都是 3 房款',
        '名牌发展商，环境很漂亮',
        '海景奢华公寓，适合自住',
      ],
    },
    {
      id: 12,
      title: "Permas Height@Permas",
      images: ['/images/projects/Tier 3/Permas Height/1.jpeg', '/images/projects/Tier 3/Permas Height/2.jpeg', '/images/projects/Tier 3/Permas Height/3.jpeg', '/images/projects/Tier 3/Permas Height/4.jpeg', '/images/projects/Tier 3/Permas Height/5.jpeg', '/images/projects/Tier 3/Permas Height/6.jpeg', '/images/projects/Tier 3/Permas Height/7.jpeg', '/images/projects/Tier 3/Permas Height/8.jpeg'],
      location: "Permas",
      descriptions: [
        '2028 Q4 拿钥匙',
        'RM395k ~RM560k',
        '华人区市中⼼，5 分钟到 MidValley',
        '海景公寓 亮点 Dualkey 房款',
        '价格适中，超低头期',
      ],
    },
    {
      id: 13,
      title: "Parkland@Permas",
      images: ['/images/projects/Tier 3/Parkland/1.jpeg', '/images/projects/Tier 3/Parkland/2.jpeg', '/images/projects/Tier 3/Parkland/3.jpeg', '/images/projects/Tier 3/Parkland/4.jpeg', '/images/projects/Tier 3/Parkland/5.jpeg', '/images/projects/Tier 3/Parkland/6.jpeg'],
      location: "Permas",
      descriptions: [
        '2028 Q4 拿钥匙',
        'RM355k ~RM670k',
        '华人区市中⼼，5 分钟到 MidValley',
        '送部分家私+豪华地砖',
        '价格适中，超低头期',
      ],
    },
  ],
  "🏆【Tier 4】20 分钟左右到关卡/RTS": [
    {
      id: 14,
      title: "Pinegate@MegahRia",
      images: ['/images/projects/Tier 4/Pinegate/1.jpeg', '/images/projects/Tier 4/Pinegate/2.jpeg', '/images/projects/Tier 4/Pinegate/3.jpeg', '/images/projects/Tier 4/Pinegate/4.jpeg'],
      location: "MegahRia",
      descriptions: [
        '2027 Q4 拿钥匙',
        'RM320k ~RM460k',
        '华人区，楼下商店街很方便',
        '名牌发展商，性价比高',
        '价位低，适合首购族',
      ],
    },
    {
      id: 15,
      title: "Central Park@Tampoi",
      images: ['/images/projects/Tier 4/Central Park/1.jpeg', '/images/projects/Tier 4/Central Park/2.jpeg', '/images/projects/Tier 4/Central Park/3.jpeg', '/images/projects/Tier 4/Central Park/4.jpeg', '/images/projects/Tier 4/Central Park/5.jpeg', '/images/projects/Tier 4/Central Park/6.jpeg'],
      location: "Tampoi",
      descriptions: [
        'Phase 2 可以拿钥匙了',
        'RM370k ~RM490k',
        'Township 项⽬，楼下就有很多店屋，方便性高~',
        'Phase 3 coming soon...',
      ],
    },
    {
      id: 16,
      title: "Aliva@AusSn",
      images: ['/images/projects/Tier 4/Aliva/1.jpeg', '/images/projects/Tier 4/Aliva/2.jpeg', '/images/projects/Tier 4/Aliva/3.jpeg', '/images/projects/Tier 4/Aliva/4.jpeg'],
      location: "AusSn",
      descriptions: [
        '2027 Q1 拿钥匙',
        'RM410k ~RM605k',
        'Mount AusSn 旺区，走路到 commercial lots',
        'Astaka Padu (Branded Developer)',
        '靠近 2nd link',
      ],
    },
  ],
  "🏆靠近【Second Link】系列": 
    [
      {
        id: 17,
        title: "Iskandar Residence@Medini",
        images: ['/images/projects/SecondLink/Iskandar Residence/1.jpeg', '/images/projects/SecondLink/Iskandar Residence/2.jpeg', '/images/projects/SecondLink/Iskandar Residence/3.jpeg', '/images/projects/SecondLink/Iskandar Residence/4.jpeg', '/images/projects/SecondLink/Iskandar Residence/5.jpeg', '/images/projects/SecondLink/Iskandar Residence/6.jpeg'],
        location: "Medini",
        descriptions: [
          '完工项目',
          'RM750k ~RM935k',
          '剩下大房款',
          '高级公寓，Bali风设施层',
          '部分房款 Free 全家私装修',
        ],
      },
      {
        id: 18,
        title: "V Residence@Medini",
        images: ['/images/projects/SecondLink/V Residence/1.jpeg', '/images/projects/SecondLink/V Residence/2.jpeg', '/images/projects/SecondLink/V Residence/3.jpeg', '/images/projects/SecondLink/V Residence/4.jpeg', '/images/projects/SecondLink/V Residence/5.jpeg', '/images/projects/SecondLink/V Residence/6.jpeg', '/images/projects/SecondLink/V Residence/7.jpeg', '/images/projects/SecondLink/V Residence/8.jpeg'],
        location: "Medini",
        descriptions: [
          '2028 Q4 拿钥匙',
          'RM340k ~RM590k',
          'Dualkey 房款 + 独有 Duplex 房款',
          '性价比很高，适合投资出租',
          '靠近 Second Link',
        ],
      },
      {
        id: 19,
        title: "Macrolink@Medini",
        images: ['/images/projects/SecondLink/Macrolink/1.jpeg', '/images/projects/SecondLink/Macrolink/2.jpeg', '/images/projects/SecondLink/Macrolink/3.jpeg', '/images/projects/SecondLink/Macrolink/4.jpeg', '/images/projects/SecondLink/Macrolink/5.jpeg', '/images/projects/SecondLink/Iskandar Residence/6.jpeg'],
        location: "Medini",
        descriptions: [
          '完工项目',
          'RM490k ~RM1.1mil',
          'Dualkey 房款+独有 Duplex 房款',
          '超大公园&多种类公寓设施',
          '度假公寓 （国际知名发展商）',
        ],
      },
    ],
};


const ProjectShowcase = () => {
  const [activeKey, setActiveKey] = useState(null); // Manage active accordion item state
  const componentRef = useRef(null); // Reference to the component's container

  const handleAccordionClose = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey); // Toggle between open/close

    if (componentRef.current) {
      componentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className="project-showcase py-5 bg-white"
      ref={componentRef}
      style={{
        backgroundImage: `url(${projectBg})`,
        backgroundSize: 'cover', // Ensures the image covers the entire area without distortion
        backgroundPosition: 'center', // Centers the image to ensure it’s aligned properly
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
    }}
    >
      <div className="container">
        <h2 className="mb-4 text-center">Current Projects 现有的项目</h2>
        <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
          {Object.entries(tieredProjects).map(([tier, projects], tierIndex) => (
            <Accordion.Item eventKey={String(tierIndex)} key={tier}>
              <Accordion.Header>{tier}</Accordion.Header>
              <Accordion.Body>
                {projects.map((project) => (
                  <Card className="shadow-sm mb-4" key={project.id}>
                    <Carousel>
                      {project.images.map((image, index) => (
                        <Carousel.Item key={index}>
                          <img
                            src={image}
                            alt={`${project.title} ${index + 1}`}
                            className="d-block w-100 img-fluid p-3"
                            style={{
                              height: '500px', // Adjust as needed
                              objectFit: 'contain',
                            }}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>
                        <strong>Location:</strong> {project.location}
                      </Card.Text>
                      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                        {project.descriptions.map((desc, index) => (
                          <li key={index} style={{ marginBottom: '10px' }}>
                            <span style={{ color: 'green', marginRight: '8px' }}>✅</span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                ))}
                <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleAccordionClose(String(tierIndex))}
                      style={{ display: 'block', margin: '0 auto' }}
                    >
                      Close This Section
                </Button>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default ProjectShowcase;
