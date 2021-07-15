import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './styles/App.css';

function App() {

  const segundoCon = {
    height: 'auto',
    backgroundColor: 'white',
    padding: '0'
  }

  return (
    <div>
      <Container fluid className="contenedor">
        <Header></Header>
        <Main></Main>
      </Container>
      <Container fluid className='contenedor' style={segundoCon}>
        <About />
        <Projects />
        <Contact />
      </Container>
      
    </div>
  );
}

export default App;
