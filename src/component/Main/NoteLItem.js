import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteLItem extends Component {
    towActionButton = () => {
        this.props.changeEditStatus(); //action1
        //hàm lấy nội dung truyền trong store, để store update dữ liệu --action2
        this.props.getEditData(this.props.note);
    }
    deleteData = () => {
        this.props.getDeleteData(this.props.note.key);
        alert("Xóa thành công !");
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                <a className="collapsed card-link" data-toggle="collapse" href={"#collapse" + this.props.NoteKey}>
                    {this.props.Title}
                </a>
                <button type="button" className="btn btn-outline-secondary float-right" onClick={() => this.deleteData()}>Xóa</button>
                <button type="button" className="btn btn-outline-primary float-right" onClick={() =>this.towActionButton()}>Sửa</button>
                </div>
                <div id={"collapse" + this.props.NoteKey} className="collapse" data-parent="#accordion">
                <div className="card-body">
                    {this.props.Content}
                </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.isEdit
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      changeEditStatus: () => {
        dispatch({
          type:"CHANGE_EDIT_STATUS"
        })
      },
      getEditData: (editObject) => {
        dispatch({
          type:"CHANGE_EDIT_DATA",editObject
        })
      },
      getDeleteData: (deleteId) => {
        dispatch({
          type:"DELETE_DATA",deleteId
        })
      }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(NoteLItem)