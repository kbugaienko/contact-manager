import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => this.setState({
        title: data.title,
        body: data.body
      }));
  }

  // UNSAFE_componentWillMount() {
  //   console.log('componenWillMount....');
  // }

  // UNSAFE_componentDidUpdate() {
  //   console.log('componentDidUpdate.....');
  // }

  // UNSAFE_componentWillReceiveProps(nextProps, nextState) {
  //   console.log('componentWillReceiveProps.....');
  // }
  
  // static getDerivedStateFromProps(nextProps, prevProps) {
  //   return {
  //     test: 'something'
  //   };
  // }

  render() {
    const { title, body } = this.state;
    return(
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;