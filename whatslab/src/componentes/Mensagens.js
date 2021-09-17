import React from "react";


class EnvioDeMensagens extends React.Component{
    // state = {
    //   postagem: [
    //     usuario: "",
    //     msm:""
    //   ],
    //   valorInputPessoa: "",
    //   valorInputMsm: ""
    // };

    adicionarNovaMensagem = () => {
        const novaMensagem = {
            usuario: this.state.valorInputPessoa,
            msm: this.state.valorInputMsm,
        };
        this.setState({postagem: novaMensagem});
    }

    onChangeInputUsuario = (event) => {
        this.setState({ usuario: event.target.value });
    }

    onChangeInputMsm = (event) => {
        this.setState({ msm: event.target.value });
    }

    onClickEnviar = () => {};

    render(){
        console.log(this.state);
        return (
           <AppContainer>
                <h1>Conversa do WhatsLab</h1>
                <input
                 placeholder={"Nome completo"}
                 value={this.state.usuario}
                 onChange={this.onChangeInputUsuario}
                /> 
                <input
                placeholder={"Digite sua Mensagem"}
                value={this.state.msm}
                onChange={this.onChangeInputMsm}
               />
              <br />
            <button onClick={this.onClickEnviar}>Enviar</button>
            </AppContainer>
        )

    }

}

export default EnvioDeMensagens;