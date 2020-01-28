import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';

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

  // onDeleteClick = (id, dispatch) => {
  //     axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  //         .then(res => dispatch({type:'DELETE_CONTACT', payload: id}));        
  // };

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
    const { id, name, email, phone, website } = this.props.contact;
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
                <li className="list-group-item">{email}</li>
                <li className="list-group-item">{phone}</li>
                <li className="list-group-item">{website}</li>
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