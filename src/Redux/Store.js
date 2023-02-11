import { useState } from "react";
import { createStore, applyMiddleware } from "redux";
import { colorToggole, DataCapture, deleteTodo, InputEnter, statusTogolling, UpdateAll } from "./InputSlide/InpurtActionType";
import { DataCaptureType, InputEnterType, loadedDataType } from "./InputSlide/InputAction";
import InputReducer from "./InputSlide/InputReducer";
import rootReducer from "./RootReducer";

const watchValue = (store) => (next) => (action) => {
    next(action)
    //console.log(JSON.stringify(store.getState().InputSlide))

}
const fetchData = (store) => (next) => (action) => {
    if (action.type === DataCapture) {
        // const [data,setdata]=useState([])
        let url = 'http://localhost:5000/watchtodo'
        fetch(url)
            .then(res => res.json())
            .then(data => {

                store.dispatch(loadedDataType(data))
            })
    }

    else if (action.type === InputEnter) {

        let url = 'http://localhost:5000/postTodo'
        fetch(url,
            {
                headers: {

                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    id: store.getState().InputSlide.length + 1, Content: action.payload,
                    color: "red",
                    status: false
                })
            })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(function (res) { console.log(res) })
    }


    else if (action.type === colorToggole) {
        console.log(action)
        let url = 'http://localhost:5000/updateColor'
        fetch(url,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "put",
                body: JSON.stringify({
                    id: action.payload,
                    color: action.color
                })
            })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(function (res) { console.log(res) })
    }


    else if (action.type === statusTogolling) {
        console.log(action)
        let url = 'http://localhost:5000/updateStatus'
        fetch(url,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "put",
                body: JSON.stringify({
                    id: action.payload,
                    value: action?.value

                })
            })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(function (res) { console.log(res) })

    }

    else if (action.type === UpdateAll) {
        const url = 'http://localhost:5000/allupdatestatus';
        fetch(url, {
            method: 'PATCH',
            body: JSON.stringify({
                title: 'foo',
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

    }

    else if (action.type === deleteTodo) {
        let url = 'http://localhost:5000/deleteTodo'
        fetch(url,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "delete",
                body: JSON.stringify({
                    id: action.payload

                })
            })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(function (res) { console.log(res) })

            store.dispatch(DataCaptureType())

    }




    next(action)

}




const store = createStore(rootReducer, applyMiddleware(watchValue, fetchData))
export default store