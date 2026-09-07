import './index.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Summary from './components/Summary';
import CaseStudies from './components/CaseStudies';
import DemoSection from './components/DemoSection';
import ExpertiseAreas from './components/ExpertiseAreas';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <CaseStudies />
      <DemoSection />
      <ExpertiseAreas />
      <Summary />
      <About />
      <Footer />
    </div>
  );
}

export default App;
