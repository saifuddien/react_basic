import React from "react";
import { globalConsumer } from "../../states/context/context";

// import { connect } from "react-redux";
import './LifeCycleComp.css'

class LifeCycleComp extends React.Component {
  // lifecycle 1
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
    console.log('constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps')
    return null;
  }

  // selesai sini kalo tidak ada update
  componentDidMount() {
    console.log('componentDidMount')
    // setTimeout(() => {
    //   this.setState({
    //     count: 2
    //   })
    // }, 5000);
  }

  // kalo ada update nilai maka ke method ini
  shouldComponentUpdate(nextProps, nextState) {
    console.group('shouldComponentUpdate')
    console.log('next props : ', nextProps);
    console.log('next state : ', nextState);
    console.log('now state : ', this.state);
    console.groupEnd();

    if (this.state.count >= 5) {
      return false;
    }

    return true; //butuh return
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate')
    return null; //butuh return
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  // function tambah
  updateCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    console.log('render')
    return (
      <>
        <h1 className="header">LifeCycle</h1><hr />
        <button onClick={this.updateCount} className="btn">Life Cycle {this.state.count}</button>
        {/* <h2>total count global : {this.props.setCount}</h2> */}

        {/* redux */}
        {/* <h2>total count global : {this.props.count}</h2>  */}

        {/* context */}
        <h2>total count global : {this.props.state.setCount}</h2>
      </>
    )
  }
}

// redux

// const mapStateToProps = state => {
//   return {
//     count: state.setCount
//   }
// }

// export default connect(mapStateToProps)(LifeCycleComp);

// context
export default globalConsumer(LifeCycleComp);

// export default LifeCycleComp;