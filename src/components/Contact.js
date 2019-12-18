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
  state = {
      showContactInfo: false
  };

    onShowClick = e => {
        // update our state
        this.setState({ showContactInfo: !this.state.showContactInfo });
    };

    render(){
        const { name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;
    
        return(
            <div className="card card-body mb-3">
                <h4>{name} 
                    <i onClick={this.onShowClick}
                    className="fas fa-sort-down"></i>
                </h4>
                {showContactInfo ? (<ul className="list-group">
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{phone}</li>
                </ul>) : null}
                
            </div>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default Contact;