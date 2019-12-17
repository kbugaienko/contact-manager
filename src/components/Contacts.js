import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
    constructor() {
        super();
        this.state = {
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
        };
    }

    render() {
        const { contacts } = this.state;
    
        return (
            <div>
                {contacts.map(contact => (
                <Contact 
                    key={contact.id}
                    contact={contact}
                />
                ))}
            </div>
        );
    }
}


export default Contacts;