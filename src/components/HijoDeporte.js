import { Component } from "react";

class HijoDeporte extends Component {
  seleccionarFavorito = () => {
    //CAPTURAMOS EL DEPORTE DEL PROPIO COMPONENT EN PROPS
    var deporte = this.props.deporte;
    this.props.favorito(deporte);
  };
  render() {
    return (
      <div>
        <h2>{this.props.deporte}</h2>
        <button onClick={this.seleccionarFavorito}>Mostrar favorito</button>
      </div>
    );
  }
}

export default HijoDeporte;
