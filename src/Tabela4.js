/**
 * Tabela4.js
 */
import React from "react";

function Cabecalho(){
  return (
    <tr>
    <th>Nome</th>
    <th>Apelido</th>
    </tr>
  )
}

const Corpo = (props) => {
  //'map' funciona como um 'for'
  const linhas = props.dadosTabelaIN.map((aluno, index)=>{
    return(
      <tr key={index}>
        <td>{aluno.nome}</td>
        <td>{aluno.apelido}</td>
      </tr>
    )
  })
  
  return (
    <tbody>
      {linhas}
    </tbody>
  )
}
class Tabela4 extends React.Component{
    render(){

        const {dadosAlunosIN}=this.props;
        return(
          <table className="table table-bordered">
            <Cabecalho />
            <Corpo dadosAlunosIN={dadosAlunosIN}/>
          </table>
        )
    }
}

export default Tabela4