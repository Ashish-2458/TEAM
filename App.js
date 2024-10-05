import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PhysicsPyqs from './components/PhysicsPyqs';
import ChemistryPyqs from './components/ChemistryPyqs';
import MathematicsPyqs from './components/MathematicsPyqs';
import SideNav from './components/SideNav';

const App = () => {
  return (
    <Router>
      <div className="App" style={{ display: 'flex', backgroundColor: '#ffe6c6', minHeight: '100vh' }}>
        <SideNav />
        <div
          style={{
            flex: 1,
            marginTop : "20px",
            padding: '20px',
            marginLeft: '20px',
            marginRight: '20px',
            backgroundColor: '#fff7ed',
            borderRadius: '10px',
          }}
        >
          <Routes>
            <Route path="/physics" element={<PhysicsPyqs />} />
            <Route path="/chemistry" element={<ChemistryPyqs />} />
            <Route path="/mathematics" element={<MathematicsPyqs />} />
            <Route path="/" element={<h2>Welcome to JEE Mains PYQs</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
