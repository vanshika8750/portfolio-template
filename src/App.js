import'./logo_port.jpg';
import './App.css';
import Body from './components/Body';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const mystyle={
    backgroundImage:"url('https://i.pinimg.com/originals/45/3f/14/453f143ad31ed8482ebed9c4084b8059.jpg')",
    backgroundSize: 'cover',
     zIndex:'-1'
  };
  return (
    <>
    <div style={mystyle}>
    <Navbar/>
    <Body/>
    <Skills/>
    </div>
    <Projects/>
    <Contact/>

    <Footer/>
    </>
  );
}

export default App;
