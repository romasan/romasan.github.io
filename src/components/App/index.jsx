import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../../actions';
import './style.scss';
import Card from '../Card';
class App extends Component {
  render () {
    return (
      <div className="app">
        <div className="head">Projects:</div>
        <div><center>Однажды я доделаю это ****е портфолио...</center></div>
        {this.props.list.map((item, i) => <Card key={i} item={item}/>)}
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
