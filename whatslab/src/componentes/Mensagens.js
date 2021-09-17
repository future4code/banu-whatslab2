import React, {Component} from 'react'

class EnvioDeMensagens extends React.Component{
    state = {
     usuario: '',
     msm: ''
    };

    onChangeUsuario = (event) => {
        this.setState({ usuario: event.target.value });
    }

    onChangeMsm = (event) => {
        this.setState({ msm: event.target.value });

    }

    onClickEnviar = () => {
        
    };


    render(){
        console.log(this.state);
        return (
           <div>
               <input
                 placeholder={'Nome completo'}
                 value={this.state.usuario}
                 onChange={this.onChangeUsuario}
                /> 
                <input
                placeholder={'Digite sua Mensagem'}
                value={this.state.msm}
                onChange={this.onChangeMsm}
               />
              <br />
            <button onClick={this.onClickEnviar}>Enviar</button>
            </div>
        )

    }

}

export default EnvioDeMensagens;