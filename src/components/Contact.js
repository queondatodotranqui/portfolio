import { Col, Image, Row, Nav} from 'react-bootstrap';
import '../styles/Contact.css';
import Footer from './Footer';

const Contact = ()=>{
    return(
        <div className='contact-bg'>
            <div className='contact' id='contact'>
                <h2>Let's talk!</h2>
                <h4>You can find me on my social networks o via <a href='https://wa.me/5492235578480?text=Hello! I am Nicolas Vera. Nice to meet you'>WhatsApp</a></h4>
                <Row className='redes'>
                    <Nav>
                        <Col>
                            <Nav.Link href='https://www.linkedin.com/in/nicolas-vera-653b54196'>
                                <Image src='/img/linkedin.svg'></Image>
                            </Nav.Link>
                            
                        </Col>
                        <Col>
                            <Nav.Link href='https://www.instagram.com/_________________________vera/'>
                                <Image src='/img/instagram.svg'></Image>
                            </Nav.Link>   
                        </Col>
                        <Col>
                            <Nav.Link href='https://github.com/queondatodotranqui'>
                                <Image src='/img/github.svg'></Image>
                            </Nav.Link>    
                        </Col>
                    </Nav>
                </Row>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;