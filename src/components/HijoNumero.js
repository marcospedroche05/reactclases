import { Component } from "react";

class HijoNumero extends Component {
  enviarSumar = () => {
    var num = this.props.numero;
    this.props.sumar(num);
  };
  render() {
    return (
      <div>
        <h3 style={{ color: "red" }}>Numero {this.props.numero}</h3>
        <button onClick={this.enviarSumar}>Sumar {this.props.numero}</button>
      </div>
    );
  }
}

export default HijoNumero;
