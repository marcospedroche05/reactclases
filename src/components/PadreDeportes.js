import { Component } from "react";
import HijoDeporte from "./HijoDeporte";

class PadreDeportes extends Component {
  deportes = ["Futbol", "Baloncesto", "Natacion", "Tenis"];
  state = {
    favorito: "",
  };
  mostrarFavorito = (deporteSeleccionado) => {
    this.setState({
      favorito: deporteSeleccionado,
    });
  };
  render() {
    return (
      <div>
        <h1>Padre deportes</h1>
        <h2 style={{ backgroundColor: "yellow" }}>
          Mi deporte favorito es: {this.state.favorito}
        </h2>
        {this.deportes.map((deporte, index) => {
          return (
            <HijoDeporte
              key={index}
              deporte={deporte}
              favorito={this.mostrarFavorito}
            />
          );
        })}
      </div>
    );
  }
}

export default PadreDeportes;
