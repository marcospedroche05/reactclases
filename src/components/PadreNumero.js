import { Component } from "react";
import HijoNumero from "./HijoNumero";

class PadreNumero extends Component {
  generaRandom = () => {
    var arraynums = [];
    for (let i = 0; i < 4; i++) {
      var numAleatorio = parseInt(Math.random() * 100) + 1;
      arraynums.push(numAleatorio);
    }
    return arraynums;
  };
  state = {
    numeros: this.generaRandom(),
    suma: 0,
  };

  sumarNumeros = (numero) => {
    this.state.suma += parseInt(numero);
    this.setState({
      suma: this.state.suma,
    });
  };

  nuevoNumero = () => {
    var nuevoNum = parseInt(Math.random() * 100) + 1;
    this.state.numeros.push(nuevoNum);
    this.setState({
      numeros: this.state.numeros,
    });
  };

  render() {
    return (
      <div>
        <h1>Padre números</h1>
        <h3 style={{ backgroundColor: "yellow" }}>
          La suma es {this.state.suma}
        </h3>
        <button onClick={this.nuevoNumero}>
          Generar nuevo número aleatorio
        </button>
        {this.state.numeros.map((numero, index) => {
          return (
            <HijoNumero numero={numero} key={index} sumar={this.sumarNumeros} />
          );
        })}
      </div>
    );
  }
}

export default PadreNumero;
