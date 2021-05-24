import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/App.css';

function App() {
  return (
    <div>
      <Container fluid className="contenedor">
        <Header></Header>
        <Main></Main>
      </Container>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
