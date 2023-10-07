import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Feed from './component/Feed/feed';
import VideoDetails from './component/VideoDetails/videoDetails'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Feed} />
          <Route path="/video/:id" component={VideoDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
