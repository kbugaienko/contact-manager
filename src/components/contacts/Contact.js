import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';

import './contact.css';


class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = e => {
    // update our state
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = async(id, dispatch) => {
    try {
      await axios.delete
        (`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({type:'DELETE_CONTACT', payload: id});
    } catch(e) {
      dispatch({type:'DELETE_CONTACT', payload: id});
    }  
  };
  
  render(){
    const { id, name, email, phone, website, address } = this.props.contact;
    const { showContactInfo } = this.state;

    return(
      <Consumer>
        {value => {
          const { dispatch } = value;
          return(
            <div className="card card-body mb-3">
              <h4>{name} {' '}

                <i
                  onClick={this.onShowClick}
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer'}}
                />

                <i className="fas fa-times" style={{
                  cursor: 'pointer',
                  float: 'right',
                  color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />

                <Link to={`contact/edit/${id}`}>
                  <i 
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight:'1rem'
                    }}  
                  />
                </Link>
              </h4>
              {showContactInfo ? (<ul className="list-group">
                <li className="list-group-item">
                  <p><i className='fas fa-envelope'></i> Email: {email}</p>
                </li>
                <li className="list-group-item">
                    <p><i className='fas fa-phone'></i> Phone: {phone}</p>
                </li>
                <li className="list-group-item">
                    <p><i className='fab fa-firefox-browser'></i> Website: {website}</p>
                </li>
                <li className="list-group-item">
                    <p><i className='fas fa-address-card'></i> Address: 
                      <address style={{ marginLeft: '6em' }}>
                        <i>Street: {address.street}</i><br></br>
                        <i>Suite: {address.suite}</i><br></br>
                        <i>City: {address.city}</i><br></br>
                        <i>ZipCode: {address.zipcode}</i>
                      </address>
                    </p>
                </li>
              </ul>) : null}
            </div>
          )
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default Contact;