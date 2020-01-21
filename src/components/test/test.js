import React, { Component } from 'react';

class Test extends Component {
  state = {
    test: 'test'
  };

  componentDidMount() {
    console.log('componentDidMount....');
  }

  UNSAFE_componentWillMount() {
    console.log('componenWillMount....');
  }

  UNSAFE_componentDidUpdate() {
    console.log('componentDidUpdate.....');
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    console.log('componentWillReceiveProps.....');
  }
  
  static getDerivedStateFromProps(nextProps, prevProps) {
    return {
      test: 'something'
    };
  }

  render() {
    return(
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;