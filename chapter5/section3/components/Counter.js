import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  style = {
    fontSize: "12pt",
    padding: "5px 15px"
  }

  constructor(porps) {
    super(props);
    this.doAction = this.doAction.bind(this);
    this.reset = this.reset.bind(this);
  }

  doAction(e) {
    if (e.shiftKey) {
      return this.props.dispatch({type: 'DECREMENT'});
    } else {
      return this.props.dispatch({type: 'INCREMENT'});
    }
  }

  reset() {
    return this.props.dispatch({type: 'RESET'});
  }

  render() {
    <div>
         <p>{this.props.message}:{this.props.count}</p> 
    </div>
  }
}