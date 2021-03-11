
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Inicio } from './components/inicio';
import { Navbar } from './components/navbar';
import { Nosotros } from './components/nosotros';
import { Productos } from './components/productos';
import { FAQ_Component } from './components/faq';
import { Login } from './components/login';
import { Registro } from './components/registro';

function App() {
  return (
    <Router>
      <Navbar/>
      <div>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/registro" component={Registro}/>
          <Route path="/faq" component={FAQ_Component}/>
          <Route path="/productos" component={Productos}/>
          <Route path="/nosotros" component={Nosotros}/>
          <Route path="/" component={Inicio}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
