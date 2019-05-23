import React, { Component } from 'react'
import NumberItems from './NumberItems';

export default class NumberList extends Component {
  constructor(props){
    super(props);
    this.state = {
      nums: [1, 2, 3, 4, 5]
    }
    //Passed once to constructor
    this.remove = this.remove.bind(this);
  }

  //Action Remove
  remove(num){
    this.setState( prev => ({
      nums: prev.nums.filter( f => f !== num)
    }))
  }
  render() {
    const dom = this.state.nums.map(( n , idx) => {
                                                  // render once
      return <NumberItems key={idx} value={n} act={this.remove}/>
    })
    return (
      <div className="NumberList">
        <ul>
          {dom}
        </ul>
      </div>
    )
  }
}
