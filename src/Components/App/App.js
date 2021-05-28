import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Route exact path='/' component={ Home }/>
      <Route path='/portfolio' component={ Portfolio }/>
      <Route path='/contact' component={ Contact }/>
    </>
  )
}

export default App;
