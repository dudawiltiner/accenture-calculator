import React, { Component } from 'react';
import '../css/calculator.css'

class ButtonOperator extends Component {
  constructor(props){
    super(props);
    this.state= {value: '0'}
  }
  render() {
    const {funcOperator, funcReset} = this.props;
    const operators = ['+', '-', '*', '/', '='];

    return(
      <div className="button-operator">
        { operators.map((operator, idx) => 
            <button
              key={idx} 
              onClick={() => funcOperator(operator)}
            >
              {operator}
            </button>
        )}

        <button onClick={funcReset}>C</button>
      </div>
    )
  }
}

export default ButtonOperator;