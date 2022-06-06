/**
 * App.js
 */

import React from "react";
import Tabela from './Tabela';
import Tabela2 from './Tabela2';
import Tabela3 from './Tabela3';
import Tabela4 from './Tabela4';

class App extends React.Component{
  render(){
    const alunos= [
      {
        nome: "Ana",
        apelido: "Silva"
      },
      {
        nome: "Mario",
        apelido: "Lopes"
      }
    ]

    return(
      <div className="container">
          <h1>Alunos</h1>
          <h4>Primeira tabela</h4>
          <p>tabela com codido 100% hardcode</p>
          <Tabela />
          <br />
          <p>tabela com uso de componentes internos</p>
          <h4>Primeira tabela</h4>
          <Tabela2 />
          <br />
          <p>tabela com uso de componentes internos</p>
          <h4>Primeira tabela</h4>
          <Tabela3 dadosAlunosIN={alunos}/>

      </div>
    )
  }
}
export default App;
