import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Feed from './component/Feed/feed';
import VideoDetails from './component/VideoDetails/videoDetails'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
