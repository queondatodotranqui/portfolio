import { Col , Row, Image } from 'react-bootstrap';
import '../styles/About.css';

const About = () =>{
    return(
        <div className="about" id='about'>
            <Row className="info">
                <Col xs={0} md={6} className='photo'>
                    <div className='placeholder'></div>
                </Col>
                <Col xs={12} md={6} className='aboutMe'>
                    <h2 className='p-3'>About me</h2>
                    <p className='self p-3'>
                        I'm a Node.js Back-end Developer based in Mar del Plata, Argentina.<br /> I started learning Front-end and along the way became fascinated by Javascript and Node.js.
                    </p>
                </Col>
            </Row>
            <div className="tech">
                <h2>My Technologies</h2>
                <Row className='logos'>
                    <Col xs={12} sm={2}>
                        <Image src='/img/HTML5.png' fluid></Image>
                    </Col>
                    <Col xs={12} sm={2}>
                        <Image src='/img/javascript.png' fluid></Image>
                    </Col>
                    <Col xs={12} sm={2}>
                        <Image src='/img/nodejs.png' fluid></Image>
                    </Col>
                    <Col xs={12} sm={2}>
                        <Image src='/img/react.png' fluid></Image>
                    </Col>
                    <Col xs={12} sm={3}>
                        <Image src='/img/mongo.png' fluid></Image>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default About;