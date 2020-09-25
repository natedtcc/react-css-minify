import React from 'react';
import Header from './components/Header/Header.js';
import CssInput from './components/CssInput/CssInput.js';
import classes from './App.module.css';
import Button from './components/Button/Button.js';


function App() {
  return (
    <div className={classes.App}>  
      <Header/>
      <div className={classes.Lines}/>
      <CssInput submit="" />
      <Button><center>MINIFY!</center></Button>
    </div>
  );
}

export default App;
