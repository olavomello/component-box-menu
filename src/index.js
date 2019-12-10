import React from "react";
import ReactDOM from "react-dom";
import Box from "./components/box/main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <div className="menu">
            <Box
              title="Sobre"
              desc="Clique e saiba mais sobre a empresa."
              route="/sobre"
            />
            <Box
              title="Produtos"
              desc="Acesse agora nosso catálogo de produtos."
              route="/produtos"
            />
            <Box
              title="Artigos & Notícias"
              desc="Confira nossas últimas novidades."
              route="/noticias"
            />
            <Box
              title="Contato"
              desc="Entre em contato conosco."
              route="contato"
            />
            <Box
              title="GitHub"
              desc="Acesse nosso GitHub."
              url="https://github.com/olavomello/component-box-menu"
            />
          </div>
        </Route>
        <Route path="/sobre">
          <h1>Sobre</h1>
        </Route>
        <Route path="/produtos">
          <h1>Produtos</h1>
        </Route>
        <Route path="/noticias">
          <h1>Notícias & Artigos</h1>
        </Route>
      </Switch>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
