import React from 'react';
import './App.css';
import HomeTW from './pages/HomeTW';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import Footer from './components/Footer/Footer';
import NavbarTW from './components/NavBar/NavbarTW';

function App() {
  return (
    <>
      <Router basename={window.location.pathname || ''}>
        <NavbarTW />
        <Switch>
          <Route path='/' exact component={HomeTW} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
