import { Component } from "react";

class DibujosComplejosRender extends Component {
  state = {
    nombres: ["Marcos", "Cano", "Jose"],
  };

  generarNombre = () => {
    this.state.nombres.push("Nuevo nombre");
    this.setState({
      nombre: this.state.nombres,
    });
  };

  render() {
    return (
      <div>
        <h1>Dibujos complejos render</h1>
        <button onClick={this.generarNombre}>Generar nuevo nombre</button>
        {
          //EL CODIGO LOGICO DEBE CONTENER UN RETURN PARA QUE HAGA EL DIBUJO
          this.state.nombres.map((nombre, index) => {
            return (
              <h3 key={index}>
                {index} : {nombre}
              </h3>
            );
          })
        }
      </div>
    );
  }
}

export default DibujosComplejosRender;
