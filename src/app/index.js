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

render(<App/>, window.document.getElementById('app'));