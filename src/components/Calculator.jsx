import React, { Component } from 'react';
import { includesOperator, operationEquals } from '../helper/funcHelp';
import ButtonOperator from './ButtonOperatorn';
import '../css/calculator.css'

class Calculator extends Component {
  constructor(props){
    super(props);
    this.state= {
      value: '0', 
      operation: ''
    }
  }

  changeValue = (item) => {
    this.setState((prevState) => ({
      value: prevState.value === '0' ? item : (includesOperator(prevState.value) ? prevState.value + ' ' + item : prevState.value + item)
    }))
  }

  operationNumber = (operation) => {
    if(operation !== '=') {
      // com condição para não colocar além de uma divisão, não repetir operador depois de operador 
      // e não implementar mais de uma operação
      this.setState((prevState) => ({
        value: prevState.value.split("/").length > 1 || ![operation, ''].includes(prevState.operation) || includesOperator(prevState.value)  ? 
        prevState.value : prevState.value + ' ' + operation,
        operation: ![operation, ''].includes(prevState.operation) ? prevState.operation : operation 
      }));
    }

    else {
      const { value } = this.state;

      this.setState({
        value: operationEquals(value),
        operation: ''
      });
    }
  }

  reset = () => {
    this.setState(({
      value: '0'
    }))
  }

  render() {
    const numbers = ['1','2','3','4','5','6','7','8','9', '0'];
    const { value } = this.state;

    return (
      <div className="main">
        <div className="App">
          <img className="App-logo" alt="logo Accenture" src="./logo.svg"/>
        </div>

        <div className="container">
          <p id="title">Accenture Calculator</p> 
       
          <hr/>

          <p id="value">{value}</p>

          <div className="allbuttons">
              <div className="numbers">
                {numbers.map((item, idx) =>
                  <button
                    key={idx}
                    onClick={() => this.changeValue(item)}
                  >
                    {item}
                  </button>
                )}
              </div>
              
              <ButtonOperator funcOperator={this.operationNumber} funcReset={this.reset}/>
            </div>
          </div>
      </div>
    );
  }
}
export default Calculator;
