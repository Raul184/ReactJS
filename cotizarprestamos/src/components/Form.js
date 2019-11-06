import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class Form extends Component {
  state = {
    cantidad : '' ,
    plazo: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { cantidad , plazo } = this.state;
    this.props.calculo(cantidad , plazo)
  }
  render() {
    const {cantidad , plazo} = this.state;
    return (
        <form className="Form">
          <label htmlFor="cantidad">Total to borrow:</label>
          <input type="number" name='cantidad' className='u-full-width' onChange={this.handleChange}/>
          <label htmlFor="plazo">Terms
            <select name="plazo" id="x"className='u-full-width' onChange={this.handleChange}>
              <option value="">Select</option>
              <option value="3">3</option>
              <option value="6">6</option>
              <option value="12">12</option>
              <option value="24">24</option>
            </select>
          </label>
          <input type="submit" 
            value='Calcular' 
            className='u-full-width button-primary' 
            onClick={this.handleSubmit}
            disabled={ !cantidad && !plazo ? true : false}
          />
        </form>
    )
  }
}
//Type checking
Form.propTypes = {
   calculo: PropTypes.func.isRequired
};