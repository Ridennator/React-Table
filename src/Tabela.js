/**
 * Tabela.js
 */
import React from "react";

class Tabela extends React.Component{
    render(){
        return(
            <table className="table table-bordered">
          <tr>
            <th>Nome</th>
            <th>Apelido</th>
          </tr>
          <tr>
            <td>Ana</td>
            <td>Silva</td>
          </tr>
          <tr>
            <td>Mario</td>
            <td>Lopes</td>
          </tr>
        </table>
        )
    }
}

export default Tabela