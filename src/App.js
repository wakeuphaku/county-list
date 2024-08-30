import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import List from './List';
import Info from './Info';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/country/:name" element={<Info />} />
      </Routes>
    </Router>
  );
}

export default App;
