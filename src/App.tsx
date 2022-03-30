import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import Contato from "./paginas/contato/Contato";
import './App.css';
import Sobre from './paginas/sobre/Sobre';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <div style={{ minHeight: "100vh" }}>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/sobre">
            <Sobre />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/contato">
            <Contato />
          </Route>
          <Route path="/cadastrousuario">
            <CadastroUsuario />
          </Route>                  
        
        </div>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;