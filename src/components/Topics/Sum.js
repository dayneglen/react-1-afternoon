import React, {Component} from 'react';

class Sum extends Component {
    constructor(){
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    updateNumber1(e) {
        this.setState({number1: parseInt(e.target.value, 10) });
    }

    updateNumber2(e) {
        this.setState({number2: parseInt(e.target.value, 10) });
    }

    sum(num1, num2) {
        let answer = num1 + num2;
        this.setState({sum: answer});
    }

    render(){
        return(
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' type='number' value={this.state.number1} onChange={ (e) => this.updateNumber1(e)}/>
                <input className='inputLine' type='number' value={this.state.number2} onChange={(e) => this.updateNumber2(e)}/>
                <button className='confirmationButton' onClick={ () => this.sum(this.state.number1, this.state.number2)}>Calculate</button>
                 <span className='resultsBox'>Answer: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;