import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    /* console.log("construtor"); //primeiro console.log exibido */
  }

  componentDidMount() {
    /* console.log("componentDidMount"); //terceiro console.log exibido */
    this.setState({
      counter:10,
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
      if(nextState.counter < 13 || nextState > 15) return true;
      console.log(nextProps);

      return false;
  }
s
  componentDidUpdate(prevProps, prevState) {
    /* console.log("componentDidUpdate", this.state, prevState); //quinto */
  }

  render() {
    /* console.log("render"); //segundo console.log exibido */
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default Counter;
