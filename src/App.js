import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {


  pageSize = 12
  state ={
    progess : 0
  }
  setProgress = (progress)=>{
    this.setState({
      progess : progress
  })
  }
  render() {

    return (
      <>
        
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={ this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Routes>
            <Route
             exact path="/"
              element={<News setProgress ={this.setProgress} key="general"  country="in" pageSize={this.pageSize} category="general" />}
            />
              {/* <Route index element={<News setProgress ={this.setProgress} country="in" pageSize ={10} category="sports"/>} /> */}
              <Route
               exact path="/business"
                element={
                  <News setProgress ={this.setProgress} key="business"  country="in" pageSize={this.pageSize} category="business" />
                }
              />
              <Route
                exact path="/entertainment"
                element={
                  <News setProgress ={this.setProgress} key="entertainment"  country="in" pageSize={this.pageSize} category="entertainment" />
                }
              />
              <Route
                exact path="/general"
                element={<News setProgress ={this.setProgress} key="general" country="in" pageSize={this.pageSize} category="general" />}
              />
              <Route
                exact path="/health"
                element={<News setProgress ={this.setProgress} key="health"  country="in" pageSize={this.pageSize} category="health" />}
              />
              <Route
                exact path="/science"
                element={<News setProgress ={this.setProgress}  key="science" country="in" pageSize={this.pageSize} category="science" />}
              />
              <Route
                exact path="/sports"
                element={<News setProgress ={this.setProgress}  key="sports" country="in" pageSize={this.pageSize} category="sports" />}
              />
              <Route
                exact path="/technology"
                element={
                  <News setProgress ={this.setProgress}  key="technology" country="in" pageSize={this.pageSize} category="technology" />
                }
              />
            
          </Routes>
          </Router>
       
        {/* <div>
        <Navbar />
        <News setProgress ={this.setProgress} country="in" pageSize ={10} category="sports"/>
      </div> */}
      </>
    );
  }
}
