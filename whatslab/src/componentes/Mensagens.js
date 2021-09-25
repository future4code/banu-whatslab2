import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
display:flex-end;
  flex-direction:center;
  justify-content:center;
  align-items: flex-end;
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

class EnvioDeMensagens extends React.Component{
    state = {
        
     usuarioDigitando:'',
     msmDigitando: '',
     mensagem: []
        
    };

    onChangeUsuario = (event) => {
        this.setState({ usuarioDigitando: event.target.value });
    }

    onChangeMsm = (event) => {
        this.setState({ msmDigitando: event.target.value });
    }

    onClickEnviar = () => {
      if (
        this.state.usuarioDigitando !== "" && 
        this.state.msmDigitando !== ""
        ) {
          this.setState({
            msmDigitando: "", 
            usuarioDigitando: ""
          })
          const novoArray = [
            ...this.state.mensagem, 
            {
              usuarioValue: this.state.usuarioDigitando,
              msmValue: this.state.msmDigitando
            }
          ];
          this.setState({ 
            mensagem: novoArray
          });
      } else {
        alert("Por favor, preencha todos os campos!");
      }
    }

    render(){
        return (
           <Container>
             <div>
                {this.state.mensagem.map((mensagem, index) => {
                  return <p key={index}>{mensagem.usuarioValue}: {mensagem.msmValue} </p>
                })}
              </div>
               <UsuarioInput
                 placeholder={'Nome completo'}
                 value={this.state.usuarioDigitando}
                 onChange={this.onChangeUsuario}
                /> 
                <MsmInput
                placeholder={'Digite sua Mensagem'}
                value={this.state.msmDigitando}
                onChange={this.onChangeMsm}
               />
            <EnvioDeMsm onClick={this.onClickEnviar} type="submit">
              Enviar
            </EnvioDeMsm>
            
            </Container>

        )

    }

}

export default EnvioDeMensagens;