import React, { Component } from 'react';
import "./Formu.css";

export default class Formu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nombre: "",
      surname:"",
      direcc: "",
      phone: "",
      mail:""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: [e.target.value]
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    //collect current toDo
    const info = {
      ...this.state // id: uuid()
    }
    //clean UI
    this.setState({
      nombre: "",
      surname: "",
      direcc: "",
      phone:"",
      mail:"" 
    })
    //Let user know everything is OK
    alert("Enviado y procesando , Gracias");
  }
  render() {
    return (
      <form className="elegant-aero" onSubmit={this.handleSubmit}>
        <label htmlFor="Nombre">Nombre</label>
        <input
          required
          id="Nombre"
          name="nombre"
          type="text"
          value={this.state.nombre}
          onChange={this.handleChange}
          placeholder="Nombre"
        ></input>
        <label htmlFor="Surname">Apellidos</label>
        <input
          required
          id="Surname"
          name="surname"
          type="text"
          value={this.state.surname}
          onChange={this.handleChange}
          placeholder="Apellidos"
        ></input>
        <label htmlFor="address">Direcc.</label>
        <input
          required
          id="address"
          name="direcc"
          type="text"
          value={this.state.direcc}
          onChange={this.handleChange}
          placeholder="Apellidos"
        ></input>
        <label htmlFor="phoneNumber">Phone</label>
        <input
          required
          id="phoneNumber"
          name="phone"
          type="number"
          value={this.state.phone}
          onChange={this.handleChange}
          placeholder="Phone number"
        ></input>
        <label htmlFor="mail">Mail</label>
        <input
          required
          id="mail"
          name="mail"
          type="mail"
          value={this.state.mail}
          onChange={this.handleChange}
          placeholder="Mail address"
        ></input>
        <button className="sub">Submit</button>
      </form>
    )
  }
}