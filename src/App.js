import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import News from './components/News';
import Think from './components/Think';
import Careers from './components/Careers';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">

<BrowserRouter>
<Header/>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/work" element={<Work />} />
  <Route path="/about" element={<About />} />
  <Route path="/news" element={<News />} />
  <Route path="/thinking" element={<Think />} />
  <Route path="/careers" element={<Careers />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
<Footer/>
</BrowserRouter>

        




     {/*} <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
    </div>
  );
}

export default App;
