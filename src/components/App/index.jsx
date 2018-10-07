import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../../actions';
import './App.scss';
class App extends Component {
  componentDidMount () {
    this.props.actions.setList(['1','2','3'])
  }
  test () {
    this.props.actions.setList(['q','w','e'])
  }
  render () {
    return (
      <div className="app">
        <div className="btn" onClick={() => this.test()}>List:</div>
        {this.props.list.map((e, i) => <div key={i}>{e}</div>)}
      </div>
    );
  }
}

const mapState = state => ({
    list: state.list
});

const mapDispatch = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapState, mapDispatch)(App);
