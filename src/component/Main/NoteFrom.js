import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteFrom extends Component {
    constructor(props) {
        super(props);
        this.state ={
            Title:'',
            Content:'',
            key: ''
        };
    }

    componentWillMount() {
        if(this.props.editItem){ //edit case
            this.setState({
                Title:this.props.editItem.Title,
                Content:this.props.editItem.Content,
                key: this.props.editItem.key
            });
        }
    }
    
    isOnchage = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });
    }
    addData =(title,content) => {
        if(this.state.key){ //edit case
            var editObj ={};
            editObj.key= this.state.key;
            editObj.Title= this.state.Title;
            editObj.Content = this.state.Content;
            this.props.updateDataStore(editObj); //gửi lên store
            this.props.changeEditStatus(); //tắt from
            alert("Updata data thành công!");
        } 
        else{
            var item = {};
            item.Title = title;
            item.Content = content;
            this.props.addDataStore(item); // sử dngj 1 reducer trong store 
            alert("Thêm dữ liệu thành công!");
        }
      
    }
    printTitle = () => {
        if(this.props.adddStatus){
            return <h4 className="text-center">Thêm mới</h4>
        }
        else{
            return <h4 className="text-center">Sửa Note</h4>
        }
    }
    render() {
        return (
            <div className="col-4">
                {this.printTitle()}
                <form>
                <div className="form-group">
                    <label htmlFor="Title">Tiêu đề</label>
                    <input defaultValue={this.props.editItem.Title} onChange ={(event) => this.isOnchage(event)} type="text" className="form-control" name="Title" id="Title" aria-describedby="helpIdTitle" placeholder="Nhập tiêu đề..." />
                    <small id="helpIdTitle" className="form-text text-muted">Nhập tiêu đề tại đây</small>
                </div>
                <div className="form-group">
                    <label htmlFor="Content">Nội dung:</label>
                    <textarea defaultValue={this.props.editItem.Content} onChange ={(event) => this.isOnchage(event)} className="form-control" rows={5} id="Content" name="Content" aria-describedby="helpIdContent" />
                    <small id="helpIdContent" className="form-text text-muted">Nhập nội dung tại đây</small>
                </div>
                </form>
                <button onClick={() => this.addData(this.state.Title, this.state.Content)} type="submit" className="btn btn-info btn-block">Lưu</button>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem,
        adddStatus: state.isAdd
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type:"ADD_DATA", getItem})
        },
        updateDataStore: (getItem) => {
            dispatch({type:"UPDATE_EDIT_DATA", getItem})
        },
        changeEditStatus: () => {
            dispatch({
              type:"CHANGE_EDIT_STATUS"
            })
          }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NoteFrom)