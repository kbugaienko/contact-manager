import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './contact.css';


class Contact extends Component {
    // the same way to declare propTypes
    // static propTypes = {
    //         name: PropTypes.string.isRequired,
    //         email: PropTypes.string.isRequired,
    //         phone: PropTypes.string.isRequired,
    //     };

    render(){
        const { name, email, phone } = this.props.contact;
    
        return(
            <div className="card card-body mb-3">
                <h4>{name}</h4>
                <ul className="list-group">
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{phone}</li>
                </ul>
            </div>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default Contact;