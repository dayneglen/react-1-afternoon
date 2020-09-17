import React, {Component} from 'react';

class EvenAndOdds extends Component {
    constructor(){
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        };
    }

    handleChange = (e) => {
        this.setState({userInput: e.target.value});
    }

    assignEvenAndOdds(userInput) {
        const numArr = userInput.split(',');
        let evenArr = [];
        let oddArr = [];
        numArr.forEach((num, i, arr) => {
            if (num % 2 === 0) {
                evenArr.push( parseInt(arr[i], 10));
            } else {
                oddArr.push(parseInt(arr[i], 10));
            }
        })

        this.setState({
            evenArray: evenArr, 
            oddArray: oddArr
        });
    }

    render(){
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine' value={this.state.userInput} onChange={ (e) => this.handleChange(e)} />
                <button className='confirmationButton' onClick={ () => this.assignEvenAndOdds(this.state.userInput) }>Split</button>
                 <span className='resultsBox'>Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className='resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdds;