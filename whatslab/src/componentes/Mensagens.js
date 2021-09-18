import React from 'react';
import styled from 'styled-components'


const Container = styled.div`
width:45vw;
height:2cm;
display:flex;
`

const UsuarioInput = styled.input`
  background-color: white;
  border-radius:5px;
  border: 1px solid lightgray;
  margin: 3px 8px;
  width: 80px;
`

const MsmInput = styled.input`
  background-color: white;
  border-radius:5px;
  border: 1px solid lightgray;
  margin: 3px 8px 3px 8px;
  flex-grow: 1;
`

const EnvioDeMsm = styled.button`
  background-color: pink;
  border-radius:5px;
  margin: 3px 150px 6px 4px;
  width: 80px;
  font-weight:bold;
  font-size:16px;
`
const MsmLista = styled.div`
background-color: red;
border-radius:5px;
border: 1px solid lightgray;
heigth: 400px;
margin: 3px 8px;
width: 80px;
`

class EnvioDeMensagens extends React.Component{
    state = {
        
     usuario:'',
     msm: '',
     mensagem: []
        
    };

    onChangeUsuario = (event) => {
        this.setState({ usuario: event.target.value });
    }

    onChangeMsm = (event) => {
        this.setState({ msm: event.target.value });
    }
       onClickEnviar = () => {
        if (this.state.usuario !== "" && this.state.msm !== "") {
            const novaMensagem = {
              usuarioValue: this.state.usuario,
              msmValue: this.state.msm,
            };
            const novoArray = [novaMensagem, ...this.state.msm];
            this.setState({ mensagem: novoArray });
            this.setState({ msm: "", usuario: "" }); //Area para resetar o campo mensagem e nome
          } else {
            alert("Por favor, preencha todos os campos!");
          }
        };

        //envio mensagem
        enviarMensagem = (event) => {
            if(event.key === "Enter"){
                this.onClickEnviar();
            }
        };

        // deletMensagem = (index) => {
        //     if(window.confirm("Tem certeza que quer remover essa mensagem?")){
        //         const deleteMensagem = this.state.msm;
        //         deleteMensagem.splice(index,1);
        //         this.setState({msm: deleteMensagem});
        //     }
        // };

    render(){
        return (
           <div>
               <MsmLista
               mensagem={this.state.mensagem}
               usuario={this.state.usuario}
               msm={this.state.msm}
               />
               <Container onKeyPress={this.enviarMensagem}/>
               <UsuarioInput
                 placeholder={'Nome completo'}
                 value={this.state.usuario}
                 onChange={this.onChangeUsuario}
                /> 
                <MsmInput
                placeholder={'Digite sua Mensagem'}
                value={this.state.msm}
                onChange={this.onChangeMsm}
               />
              <br />
            <EnvioDeMsm onClick={this.onClickEnviar} type="submit">
              Enviar
            </EnvioDeMsm>
            </div>
        )

    }

}

export default EnvioDeMensagens;