import React from 'react';
import Header from './components/Header/Header.js';
import CssInput from './components/CssInput/CssInput.js';
import classes from './App.module.css';


function App() {
  return (
    <div className={classes.App}>
      <Header></Header>
      <CssInput submit="" />
    </div>
  );
}

export default App;
