import Navigation from './components/Navigation'
import Header from './components/Header'
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects'
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
