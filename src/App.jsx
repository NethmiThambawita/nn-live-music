import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientsMarquee from './components/ClientsMarquee';
import Artists from './components/Artists';
import Venues from './components/Venues';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ClientsMarquee />
        <Artists />
        <Venues />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
