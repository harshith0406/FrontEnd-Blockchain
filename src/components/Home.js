import React from 'react'
import Cards from './Cards.jsx'
import { Link as ScrollLink } from 'react-scroll';
import CarouselComponent from './Carousel.jsx'
import Content from './Content.jsx'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../assets/card1.jpg';  // Replace with actual image paths
import img2 from '../assets/c2.png';  // Replace with actual image paths
import img3 from '../assets/c3.png';  // Replace with actual image paths
const Home = () => {
    const cardContainerStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        gap: '100px',
        padding: '20px'
        // Adjust the spacing between cards as needed
    };

    return (
        <div>
            <CarouselComponent />
            <Content/>
             <Container className="text-center my-5">
      <Row>
        <Col md={4}>
          <Cards 
            title="Maintaining Medical Records" 
            imgSrc={img1} 
            text="Keep track of your medical records, enabled by blockchain technology." 
          />
        </Col>
        <Col md={4}>
          <Cards 
            title="Connect With Doctors" 
            imgSrc={img2} 
            text="Share your records with our trusted medical experts, to get a prescription." 
          />
        </Col>
        <Col md={4}>
          <Cards 
            title="" 
            imgSrc={img3} 
            text="" 
          />
        </Col>
      </Row>
    </Container>
        </div>
    );
};

export default Home;
