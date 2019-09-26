import React, { Component } from 'react';
import NoteLItem from './NoteLItem';
import { NoteDB } from '../../firebaseDB';

class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state= {
            dataFirebase: ''
        }
    }
    componentWillMount() {
        NoteDB.on('value', (notes) => {
            var ArrData = [];
            notes.forEach(element => {
                const key = element.key;
                const Title = element.val().Title;
                const Content = element.val().Content;
                ArrData.push({
                    key:key,
                    Title:Title,
                    Content:Content
                })
            });
            this.setState({
                dataFirebase:ArrData
            });
        })
    }
    
    getData = () => {
       if(this.state.dataFirebase){
         return this.state.dataFirebase.map((value,key) => {
              return (
                  <NoteLItem key = {key} NoteKey = {key} note = {value} Title = {value.Title} Content = {value.Content} />
              )
          });
           
       }
    }
    render() {
        return (
            <div className="col">
                <div id="accordion">
                    {
                        this.getData()
                    }
                </div>
          </div>
        );
    }
}

export default NoteList;