import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';

import axios from 'axios';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    website: '',
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  
    const contact = res.data;
    
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      website: contact.website
    });
  }

  onSubmit = async(dispatch, e) => {
    e.preventDefault();

    const { name, email, phone, website } = this.state;

    // check for errors
    if (name === '') {
      this.setState({
        errors: { name: "Name is required" }
      });
      return;
    }

    if (email === '') {
      this.setState({
        errors: { email: "Email is required" }
      });
      return;
    }

    if (phone === '') {
      this.setState({
        errors: { phone: "Phone is required" }
      });
      return;
    }

    if (website === '') {
      this.setState({
        errors: { website: "Website is required" }
      });
      return;
    }

    const updContact = {
      name, 
      email,
      phone,
      website
    }
  
    const { id } = this.props.match.params;

    const res = await axios.put
      (`https://jsonplaceholder.typicode.com/users/${id}`, updContact);
    
    dispatch({ type: 'UPDATE_CONTACT', payload: res.data});

    // clear state
    this.setState({
      name: '',
      email: '',
      phone: '',
      website: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  // change data in field of state
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
      const {name, email, phone, website, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return(
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup 
                    label="Name"
                    name="name"
                    placecholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup 
                    label="Email"
                    name="email"
                    type="email"
                    placecholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup 
                    label="Phone"
                    name="phone"
                    placecholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <TextInputGroup 
                    label="Website"
                    name="website"
                    placecholder="Enter Website"
                    value={website}
                    onChange={this.onChange}
                    error={errors.website}
                  />
                  
                  <input 
                    type="submit"
                    value="Update Contact"
                    className="btn btn-light btn-block"/>
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default EditContact;
