import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Feed from './component/Feed/feed';
import VideoDetails from './component/VideoDetails/videoDetails'; 
import logoImage from './image/Video-clone_logo.png'

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logoImage} alt="My Logo" className="w-20 h-20 rounded-full border border-white shadow-md" />
        <div className="cursive-text">Dekhte Rahoooo</div>
      </header>
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
