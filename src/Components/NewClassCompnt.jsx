import React, { Component } from 'react';

class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: ''
    };
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated');
    if (prevState.count !== this.state.count) {
      console.log('Count state changed');
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  handleChange = (event) => {
    this.setState({ message: event.target.value });
  }

  render() {
    const { count, message } = this.state;

    return (
      <div>
        <h2>Count: {count}</h2>
        <button onClick={this.handleClick}>Increment</button>

        <br />

        <input type="text" value={message} onChange={this.handleChange} />
        <p>Message: {message}</p>
      </div>
    );
  }
}

export default ExampleComponent;