import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import InfoSection from './components/Info-section/InfoSection';
import Services from './components/Services/Services';
import LatestCollection from './components/LatestCollection/LatestCollection';
import PopularBrands from './components/PopularBrands/PopularBrands';
import CompanyCard from './components/CompanyCard/CompanyCard';
import NewsAndUpdates from './components/News&Updates/NewsAndUpdates';
import Footer from './components/Footer/Footer';
import Testimonal from './components/Testimoinal/Testimonal';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Nav />
      <Hero />
      <InfoSection />
      <Services />
      <LatestCollection />
      <PopularBrands />
      <CompanyCard />
      <NewsAndUpdates />
      <Testimonal />
      <Footer />
    </div>
  );
}

export default App;
