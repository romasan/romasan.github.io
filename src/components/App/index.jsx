import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../actions';
import './style.scss';
import Card from '../Card';

class App extends Component {
  render () {

    const { list } = this.props;

    return (
      <div className="app">
        <div className="head"><span className="label">Projects</span></div>
        <div>{list.map((item, i) => <Card key={i} item={item}/>)}</div>
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
