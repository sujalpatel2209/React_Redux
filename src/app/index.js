/*
import React from 'react';
import {render} from 'react-dom';

import {Home} from './components/Home';
import {Header} from "./components/Header";

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: 'Sujal'
        }
    }

    changeUsername = () =>{
        this.setState({
            name: 'Sujal Patel'
        })
    }


    render() {
        return (
            <div className="text-center">
                <Header username={this.state.name}/>
                <Home changeName={this.changeUsername}/>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById('app'));*/

const middleware = (state) => (next) => (action) => {

    console.log("middleware logger : " + action.payload);
    next(action);
}


import {createStore, applyMiddleware} from 'redux';

const initialMathState = {
    result: 1
}

/*const initialUserState = {
    name: 'Sujal',
    age: 27
}*/

const mathReducer = (state = initialMathState, action) => {
    switch (action.type) {
        case "ADD":
            // console.log(state.result + action.payload);
            /*let count = state.result + action.payload;
            state.result = count;*/
            state = {
                ...state,
                result: state.result + action.payload
            }
            break;
        case "SUB":
            state = {
                ...state,
                result: state.result - action.payload
            }
            // state = state - action.payload;
            break;
    }
    return state;
}

/*const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case "SET_NAME":
            console.log(state);
            state = {
                ...state,
                name: action.payload
            }
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            }
            break;
    }
}*/

const store = createStore(mathReducer, applyMiddleware(middleware));

store.subscribe(() => {
    console.log("Updated value : " + store.getState().result)
})

store.dispatch({
    type: 'ADD',
    payload: 10
})

store.dispatch({
    type: 'SUB',
    payload: 5
})

/*
store.dispatch({
    type: 'SET_NAME',
    payload: 'Sujal Patel'
})*/
