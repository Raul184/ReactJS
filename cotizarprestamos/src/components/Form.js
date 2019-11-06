import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Results from './Results';
import Spinner from './Spinner';

export default class Form extends Component {
  state = {
    cantidad : '' ,
    plazo: '' ,
    total: null,
    loading: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { cantidad , plazo } = this.state;
    this.setState({
      loading: true
    }, () => {
      setTimeout( () => {
        this.setState({
          total: this.props.calculo(Number(cantidad) , Number(plazo)) ,
          loading: false
        })
      }, 2000)
    })
  }
  render() {
    const {cantidad , plazo , total , loading} = this.state;
    return (
        <form className="Form">
          <label htmlFor="cantidad"><h3>Total to borrow:</h3></label>
          <input type="number" name='cantidad' className='u-full-width' onChange={this.handleChange}/>
          <label htmlFor="plazo"><h3>Plazos</h3>
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
          {
            !this.state.total && !this.state.loading  ? 
            (
              <p>Complete su cantidad a prestar y los plazos a devolver</p>
            ):
            this.state.loading?
            (
              <Spinner />
            ):
            (
              <Results cantidad={cantidad} plazo={plazo} total={total} loading={loading}/>
            )
          }
          
        </form>
    )
  }
}
//Type checking
Form.propTypes = {
   calculo: PropTypes.func.isRequired
};