import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter , Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria'

const Pagina404 = () => (
    <div>
      <h1> Page 404</h1>
      <h2> Colocar o jogo da Imersão Game Dev </h2>
    </div>              );

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

