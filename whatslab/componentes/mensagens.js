class EnvioDeMensagens extends React.Component{
    state = {
      postagem: [
        valorInputPessoa= "",
        valorInputMsm=""
      ],
       
    };

    adicionarNovaMensagem = () => {
        const novaMensagem = {
            usuario: this.state.valorInputPessoa,
            msm: this.state.valorInputMsm,
        };
        this.setState({postagem: novaMensagem});
    }

    onChangeInputUsuario = (event) => {
        this.setState({ valorInputUsuario: event.target.value });
    }

    onChangeInputMsm = (event) => {
        this.setState({ valorInputMsm: event.target.value });
    }

    onClickEnviar = () => {};

    render(){
        console.log(this.state);
        return (
            <div>
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

            </div>
        )

    }

}

export default EnvioDeMensagens;