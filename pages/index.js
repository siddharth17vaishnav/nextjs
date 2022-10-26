import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import FirstQoute from '../components/FirstQoute.jsx';
import Services from '../components/Services';
import SecondQoute from '../components/SecondQoute';
import Technology from '../components/Technology';
import Contact from '../components/Contact';
import Footer from '../components/Footer'
// 
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <FirstQoute/>
      <Services/>
      <SecondQoute/>
      <Technology/>
      <Contact/>
      <Footer/>
    </div>
  );
}
