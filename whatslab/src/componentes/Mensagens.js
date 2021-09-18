import React, {Component} from 'react'
import styled from "styled-components"





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
            this.setState({ messagem: novoArray });
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

        deletMensagem = (index) => {
            if(window.confirm("Tem certeza que quer remover essa mensagem?")){
                const deleteMensagem = this.state.msm;
                deleteMensagem.splice(index,1);
                this.setState({msm: deleteMensagem});
            }
        };

    render(){
        return (
           <div>
               <div
               mensagem={this.state.mensagem}
               usuario={this.state.usuario}
               msm={this.state.msm}
               onDoubleClick={this.deletMensagem}
               />
               <div onKeyPress={this.enviarMensagem}/>
               <input
                 placeholder={'Nome completo'}
                 value={this.state.usuario}
                 onChange={this.onChangeUsuario}
                 required
                /> 
                <input
                placeholder={'Digite sua Mensagem'}
                value={this.state.msm}
                onChange={this.onChangeMsm}
                required
               />
              <br />
            <button onClick={this.onClickEnviar}>Enviar</button>
            </div>
        )

    }

}

export default EnvioDeMensagens;