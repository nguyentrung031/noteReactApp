import { NoteDB } from "./firebaseDB";

var redux = require('redux');

const noteInitialState = {
   isEdit : false,
   editItem : "",
   isAdd : false
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case"ADD_DATA":
            NoteDB.push(action.getItem);
            return state
        case"CHANGE_EDIT_STATUS":
            return {...state,isEdit:!state.isEdit}
        case"CHANGE_ADD_STATUS":
            return {...state,isAdd:!state.isAdd}
        case"CHANGE_EDIT_DATA":
            return {...state,editItem:action.editObject}
        case"UPDATE_EDIT_DATA":
            //update dữ liệu lên firedate
            NoteDB.child(action.getItem.key).update({
                Title:action.getItem.Title,
                Content:action.getItem.Content
            })
            console.log("ddd" + action.getItem);
            return {...state,editItem:{}}
        case"DELETE_DATA":
            NoteDB.child(action.deleteId).remove();
            return state
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function(){
    console.log(JSON.stringify(store.getState()));
})
export default store;