import React, { FC } from 'react';
import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router';
import About from './components/about';
import Contact from './components/contact';
import Footers from './components/footer';
import Registerform from './components/form';

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
