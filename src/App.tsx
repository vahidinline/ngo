import React, { FC } from 'react';
import './App.css';
import Home from './components/pages/home';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Footers from './components/footer';
import Registerform from './components/pages/form';

const App: FC = () => {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Registerform />} />
      </Routes>
      <Footers />
    </div>
  );
};
export default App;
