import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../../actions';
import './App.scss';
class App extends Component {
  // componentDidMount () {}
  render () {
    return (
      <div className="app">
        <div className="head">Projects:</div>
        {this.props.list.map((e, i) => <a href={e.html_url} key={i}>
          <div className="item">{e.name}</div>
        </a>)}
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
