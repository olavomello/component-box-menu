import React from "react";
import ReactDOM from "react-dom";
import Box from "./components/box/main";

import "./styles.css";

function App() {
  return (
    <div className="menu">
      <Box title="Sobre" desc="Clique e saiba mais sobre a empresa." />
      <Box title="Produtos" desc="Acesse agora nosso catálogo de produtos." />
      <Box
        title="Artigos & Notícias"
        desc="Confira nossas últimas novidades."
      />
      <Box title="Contato" desc="Entre em contato conosco." />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
