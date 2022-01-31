import React, { Component } from 'react';
import './App.css';
import GithubUserInfo from './GithubUserInfo';
import ZenQuote from './ZenQuote'

function App() {
  return (
    <div className="App">
      <ZenQuote />
      {/* <GithubUserInfo username="claudinemcg" /> */}
    </div>
  );
}

export default App;
