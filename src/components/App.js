import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import DjSets from './DjSets';
import Events from './Events';
import Footer from './Footer';
import Home from './Home';
import Nav from './Nav';
import Newsletter from './Newsletter';
import VaultEp from './VaultEp';
import Press from './Press';
import Releases from './Releases';
import Videos from './Videos';

import '../index.css';
import '../styles/App.css';

const App = () => {
  return (
    <div className="container mx-auto my-0 max-w-5xl py-0 px-6">
      <div className="flex flex-col min-h-screen justify-between">
        <BrowserRouter>
          <header className="flex justify-between py-7">
            <h1 className="text-5xl font-medium text-white">COAST2C</h1>
            <Nav />
          </header>
          <main className="pb-12 max-w-5xl flex-auto">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/events" element={<Events />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/releases" element={<Releases />} />
              <Route path="/vaultep" element={<VaultEp />} />
              <Route path="/dj-sets" element={<DjSets />} />
              <Route path="/press" element={<Press />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
};
export default App;
