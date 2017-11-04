import React from 'react';

export class Home extends React.Component {

    changeName = () => {
        this.props.changeName()
    }


    render() {
        return(
            <div>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}