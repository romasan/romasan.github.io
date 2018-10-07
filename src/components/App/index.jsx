import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../../actions';
import './App.scss';
class App extends Component {
  componentDidMount () {
    fetch('https://api.github.com/users/romasan/repos')
      .then(resp => resp.json())
      .then(data => {
        console.log('#', data);
        this.props.actions.setList(data.map(e => ({
          label: e.name,
          url: e.html_url
        })));
      });
  }
  render () {
    return (
      <div className="app">
        <div className="head">Projects:</div>
        {this.props.list.map((e, i) => <a href={e.url}>
          <div className="item" key={i}>{e.label}</div>
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
