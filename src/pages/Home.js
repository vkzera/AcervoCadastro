import React, { Component } from "react";
import api from "../services/api";
import "./styles.css";

class Home extends Component {
  state = {
    nomeLivro: "",
    autorLivro: "",
    sinopseLivro: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    const data = new FormData();
    data.append("nomeLivro", this.state.nomeLivro);
    data.append("autorLivro", this.state.autorLivro);
    data.append("sinopseLivro", this.state.sinopseLivro);
    await api.post("livros", data);
    alert("Cadastro enviado.");
    this.setState({ nomeLivro: "", autorLivro: "", sinopseLivro: "" });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form action="" id="new-post" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="nomeLivro"
            placeholder="Nome do livro"
            onChange={this.handleChange}
            value={this.state.nomeLivro}
          />
          <input
            type="text"
            name="autorLivro"
            placeholder="Autor do livro"
            onChange={this.handleChange}
            value={this.state.autorLivro}
          />
          <textarea
            type="text"
            name="sinopseLivro"
            placeholder="Sinopse do livro"
            onChange={this.handleChange}
            value={this.state.sinopseLivro}
          />

          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default Home;
