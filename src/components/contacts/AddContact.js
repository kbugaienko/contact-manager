import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';

import axios from 'axios';


class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    website: '',
    address_street: '',
    address_suite: '',
    address_city: '',
    address_zipcode: '',
    errors: {}
  };

  onSubmit = async(dispatch, e) => {
    e.preventDefault();

    const { 
      name,
      email,
      phone,
      website,
      address_street,
      address_suite,
      address_city,
      address_zipcode } = this.state;


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

    if (address_street === '') {
      this.setState({
        errors: { address_street: "Street is required" }
      });
      return;
    }

    if (address_suite === '') {
      this.setState({
        errors: { address_suite: "Suite is required" }
      });
      return;
    }

    if (address_city === '') {
      this.setState({
        errors: { address_city: "City is required" }
      });
      return;
    }

    if (address_zipcode === '') {
      this.setState({
        errors: { address_zipcode: "ZipCode is required" }
      });
      return;
    }

    const newContact = {
      name,
      email,
      phone,
      website,
      address_street,
      address_suite,
      address_city,
      address_zipcode
    };

    const res = await axios
      .post('https://jsonplaceholder.typicode.com/users', newContact);

    dispatch({ type: 'ADD_CONTACT', payload: res.data });

    // clear state
    this.setState({
      name: '',
      email: '',
      phone: '',
      website: '',
      address_street: '',
      address_suite: '',
      address_city: '',
      address_zipcode: '',
      errors: {}
    });

    this.props.history.push('/');
  };

    // change data in field of state
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
      const { 
        name,
        email,
        phone,
        website,
        address_street,
        address_suite,
        address_city,
        address_zipcode,
        errors } = this.state;

      return (
        <Consumer>
          {value => {
            const { dispatch } = value;
            return(
              <div className="card mb-3">
                <div className="card-header">Add Contact</div>
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

                    <TextInputGroup 
                      label="Street"
                      name="address_street"
                      placecholder="Enter Street"
                      value={address_street}
                      onChange={this.onChange}
                      error={errors.address_street}
                    />

                    <TextInputGroup 
                      label='Suite'
                      name="address_suite"
                      placecholder="Enter Suite"
                      value={address_suite}
                      onChange={this.onChange}
                      error={errors.address_suite}
                    />

                    <TextInputGroup 
                      label='City'
                      name="address_city"
                      placecholder="Enter City"
                      value={address_city}
                      onChange={this.onChange}
                      error={errors.address_city}
                    />

                    <TextInputGroup 
                      label='ZipCode'
                      name="address_zipcode"
                      placecholder="Enter ZipCode"
                      value={address_zipcode}
                      onChange={this.onChange}
                      error={errors.address_zipcode}
                    />
                    
                    <input 
                      type="submit"
                      value="Add Contact"
                      className="btn btn-outline-success btn-block"/>
                  </form>
                </div>
              </div>
            )
          }}
        </Consumer>
      )
  }
}

export default AddContact;
