import React, { Component } from 'react';
import Button from './button/Button';
import { connect } from 'react-redux';
import './Counter.css';

class Counter extends Component {
  // state = {
  //   count: 0
  // }

  // handleControl = (newVal) => {
  //   this.setState({
  //     count: newVal
  //   })
  // }

  render() {
    return (
      <>
        <h1 className="header">Couter</h1><hr />
        <div className="counter">
          <h1 className="numb">{this.props.count}</h1>
          {/* dapat value dari button.js */}
          {/* <Button className="button" changeValue={(value) => this.handleControl(value)} /> */}
          <Button className="button" />
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state.setCount
  }
}

export default connect(mapStateToProps)(Counter);