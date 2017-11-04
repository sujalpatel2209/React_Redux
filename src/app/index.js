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

import { createStore } from 'redux';

const initialState = {
    result: 1,
    lastValues: []
}

const reducer = (state = initialState ,action) => {
    switch(action.type){
        case "ADD":
             // console.log(state.result + action.payload);
            // state = state + action.payload;
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

const store = createStore(reducer);

store.subscribe(() => {
    console.log("Updated value : " + store.getState())
})

store.dispatch({
    type: 'ADD',
    payload: 10
})

store.dispatch({
    type: 'SUB',
    payload: 5
})