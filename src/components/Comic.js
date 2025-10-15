import { Component } from "react";

class Comic extends Component {
  enviarFavorito = () => {
    var comicFav = this.props.comic;
    this.props.favorito(comicFav);
  };
  render() {
    return (
      <div>
        <h3 style={{ color: "blue" }}>{this.props.comic.titulo}</h3>
        <p>{this.props.comic.descripcion}</p>
        <img src={this.props.comic.imagen} style={{ width: "250px" }}></img>
        <br />
        <button onClick={this.enviarFavorito}>Favorito</button>
        <button
          onClick={() => {
            this.props.eliminar(this.props.indice);
          }}
        >
          Eliminar
        </button>
      </div>
    );
  }
}

export default Comic;
