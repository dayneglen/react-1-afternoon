import React, {Component} from 'react';

class Palindrome extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange = (e) => {
        this.setState({userInput: e.target.value});
    }

    palindromeMaker(userInput) {
        let forwards = userInput;
        let backwards = userInput;
        
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');
        
        if (forwards === backwards) {
            this.setState({palindrome: 'That sir, is a palindrome!!'})
        } else {
            this.setState({palindrome: "That ain't no palindrome!!"})
        }
    }

    render(){
        return(
            <div className='puzzleBox palindromePB'>
                <h4>Palindrome</h4>
                <input className='inputLine' value={this.state.userInput} onChange={ (e) => this.handleChange(e)} />
                <button className='confirmationButton' onClick={ () => this.palindromeMaker(this.state.userInput)}>Check</button>
                <span className='resultsBox'>Palindrome: {this.state.palindrome} </span>
            </div>
        )
    }
}

export default Palindrome;