import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AssetTable } from './components';
import Home from './pages/Home';
import './App.css';

const App = () => (
  <div className="App">
    <nav>
      <div className="topMenu">
        <Link to="/">Home</Link>
        {/* <Link to="/pricingTable">Pricing Table</Link> */}
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/pricingTable" element={<AssetTable />} /> */}
    </Routes>
  </div>
);

export default App;
