import { BrowserRouter as Router } from 'react-router-dom';

import Footer from './Footer';
import Nav from './Nav';
import Routes from './Routes';

import '../tailwindImports.css';
import '../styles/App.css';

const App = () => {
  return (
    <div className="container mx-auto my-0 max-w-5xl p-0">
      <div className="flex flex-col min-h-screen justify-between">
        <Router>
          <header className="flex justify-between py-12">
            <h1 className="text-5xl font-medium text-white inline-block">
              Coast2c Lab
            </h1>
            <Nav />
          </header>
          <main className="mx-auto pb-12 max-w-5xl flex-auto">
            <Routes />
          </main>
          <Footer />
        </Router>
      </div>
    </div>
  );
};
export default App;
