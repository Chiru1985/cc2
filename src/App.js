// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EriComponent from './EriComponent';
import Desktop2 from './Desktop2';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define routes for each page */}
          <Route path="/" element={<EriComponent />} />
          <Route path="/desktop2" element={<Desktop2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
