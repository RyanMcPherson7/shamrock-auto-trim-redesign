import Navigation from './components/Navigation'
import Header from './components/Header'
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Services />
      <Projects />
    </>
  );
}

export default App;
