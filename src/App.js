import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Feed from './component/Feed/feed';
import VideoDetails from './component/VideoDetails/videoDetails';
import logoImage from './image/Video-clone_logo.png';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <Link to="/">
            <img
              src={logoImage}
              alt="My Logo"
              className="w-20 h-20 rounded-full border border-white shadow-md"
            />
          </Link>
          <Link to="/">
            <div className="cursive-text">Dekhte Rahoooo</div>
          </Link>
        </header>

        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
