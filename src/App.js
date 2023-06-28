import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App = () =>  {
  const pageSize = 6;
  const country = "in";
  const apiKey = process.env.REACT_APP_NEWS_API;
  

  const [progress, setProgress] = useState(0)
  

    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        
      />
        {/* <News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country={country} category="sports"/> */}
        <Routes>
          <Route exact path="/" element = {<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country={country} category="general"/>}/>
          <Route exact path="/business"  element = {<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={pageSize} country={country} category="business"/>}/>
          <Route exact path="/entertainment"  element = {<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country={country} category="entertainment"/>}/>
          <Route exact path="/general"  element = {<News setProgress={setProgress} apiKey={apiKey}  key= "general" pageSize={pageSize} country={country} category="general"/>}/>
          <Route exact path="/health" element = {<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={pageSize} country={country} category="health"/>}/>
          <Route exact path="/science" element = {<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} country={country} category="science"/>}/>
          <Route exact path="/sports" element = {<News setProgress={setProgress} apiKey={apiKey}  key="sports"  pageSize={pageSize} country={country} category="sports"/>}/>
          <Route exact path="/technology" element = {<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} country={country} category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
}

export default App;