import { Col , Row, Image } from 'react-bootstrap';
import '../styles/About.css';

const About = () =>{
    return(
        <div className="about" id='about'>
            <Row className="info">
                <Col xs={0} md={6} className='photo'>
                    <Image src={process.env.PUBLIC_URL + '/img/myself.jpg'} rounded></Image>
                </Col>
                <Col xs={12} md={6} className='aboutMe'>
                    <h2 className='p-3'>About me</h2>
                    <p className='self p-3'>
                        I'm a Node.js Back-end Developer based in Mar del Plata, Argentina.<br /> I started learning Front-end and along the way became fascinated by Javascript and Node.js.
                    </p>
                </Col>
            </Row>
            <div className="tech">
                <h2>My Skills</h2>
                <Row className='logos'>
                    <Col xs={12} sm={2}>
                        <Image src={process.env.PUBLIC_URL + '/img/HTML5.png'} fluid></Image>
                    </Col>
                    <Col xs={12} sm={2}>
                        <Image src={process.env.PUBLIC_URL + '/img/javascript.png'} fluid></Image>
                    </Col>
                    <Col xs={12} sm={2}>
                        <Image src={process.env.PUBLIC_URL + '/img/nodejs.png'} fluid></Image>
                    </Col>
                    <Col xs={12} sm={2}>
                        <Image src={process.env.PUBLIC_URL + '/img/react.png'} fluid></Image>
                    </Col>
                    <Col xs={12} sm={3}>
                        <Image src={process.env.PUBLIC_URL + '/img/mongo.png'} fluid></Image>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default About;