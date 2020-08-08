import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter , Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria'

const Pagina404 = () => (
    <section className="page404">
      {/* <h1> Page 404</h1>
      <h2> Aqui está meu jogo da Imersão Game Dev </h2> */}
      <iframe src="https://editor.p5js.org/Suiciniv99/embed/3hQ_AMqwp" allowfullscreen></iframe>
    </section>              );

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

