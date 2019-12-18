import React, { Component } from 'react'

const Context = React.createContext();

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'jdoe@gmail.com',
                phone: '555-555-555'
            },
            {
                id: 2,
                name: 'Karen Smith',
                email: 'kareoe@gmail.com',
                phone: '222-435-555'
            },
            {
                id: 3,
                name: 'Henry Buuty',
                email: 'herrtu@gmail.com',
                phone: '888-567-345'
            }
        ]
    }

    render() {
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;