import { Col , Row , Card , Button , Nav} from 'react-bootstrap';
import '../styles/Projects.css';

const Projects = ()=>{
    return(
        <div className='projects' id='projects'>
            <h2>Projects</h2>
            <Row className='projecol'>
                <Col xs={12} sm={6}>
                    <Card style={{ width: '100%', height: '100%' }}>
                        <Card.Body>
                            <Card.Title>Weather App</Card.Title>
                            <Card.Text>
                                Simple weather app made with Express.js, using Mapbox's and Weatherstack's API.
                            </Card.Text>
                            <div className='botones'>
                                <Nav>
                                    <Nav.Link href='https://github.com/queondatodotranqui/NodeWeatherApp'>
                                        <Button variant="outline-dark">Github</Button>
                                    </Nav.Link>
                                    <Nav.Link href='https://vera-weather-app.herokuapp.com/'>
                                        <Button variant="info">Website</Button>
                                    </Nav.Link>
                                </Nav>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6}>
                    <Card style={{ width: '100%', height: '100%' }}>
                        <Card.Body>
                            <Card.Title>Task App</Card.Title>
                            <Card.Text>
                                Task writing app with user system. Made with Express.js and MongoDB.
                            </Card.Text>
                            <div className='botones'>
                                <Nav>
                                    <Nav.Link href='https://github.com/queondatodotranqui/TaskApp'>
                                        <Button variant="outline-dark">Github</Button>
                                    </Nav.Link>
                                    <Nav.Link href=''>
                                        <Button variant="info">Website</Button>
                                    </Nav.Link>
                                </Nav>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Projects;