import { Component } from "react";

class HijoDeporte extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.deporte}</h2>
        <button onClick={this.props.favorito(this.props.deporte)}>
          Mostrar favorito
        </button>
      </div>
    );
  }
}

export default HijoDeporte;
