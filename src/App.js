import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
import NoteList from './component/Main/NoteList';
import NoteFrom from './component/Main/NoteFrom';
import {connect} from 'react-redux';

class App extends Component {
  showFrom = () => {
    if(this.props.isEdit){
      return <NoteFrom/>
    }
  }
  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <div className="row">
            <NoteList/>
            {
              this.showFrom()
            }
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}
export default connect(mapStateToProps)(App)