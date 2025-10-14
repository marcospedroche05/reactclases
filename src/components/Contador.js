import { Component } from "react";
//PODEMOS DECLARAR MÉTODOS FUERA DE LA CLASE
//DICHOS MÉTODOS NO PUEDEN USAR NADA DEL COMPONENT
function metodoAbsurdo() {
  console.log("Método sin funcionalidad");
}
class Contador extends Component {
  //LAS VARIABLES DEL COMPONENTE SE DEFINEN SIN VAR NI LET
  //SIEMPRE QUE SE HAGA REFERENCIA A UNA VARIABLE O A UN MÉTODO DEL MISMO COMPONENTE, SE USA this.
  numero = parseInt(this.props.numero);
  incrementarNumero = () => {
    this.numero += 1;
    console.log("Cantidad de clicks: " + this.numero);
  };
  incrementarValor = () => {
    this.setState({
      valor: (this.state.valor += 1),
    });
  };

  state = {
    valor: parseInt(this.props.numero),
  };
  //LA SINTAXIS DEL CODIGO HTML HA CAMBIADO
  render() {
    return (
      <div>
        <h1 style={{ color: "blue" }}>Ejemplo contador JSX</h1>
        <button onClick={this.incrementarValor}>Haz clic</button>
        <button
          onClick={() => {
            //CODIGO JSX
            //SI EL MÉTODO/VARIABLE ES EXTERNO, NO SE DEBE USAR this.
            metodoAbsurdo();
            this.incrementarValor();
          }}
        >
          Otra sintaxis con funcion anonima lambda
        </button>
        <h2>Cantidad de clicks: {this.state.valor}</h2>
      </div>
    );
  }
}

export default Contador;
