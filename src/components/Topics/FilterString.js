import React, {Component} from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: ['hello', 'hi', 'peanut butter', 'serious', 'speaker', 'fun', 'sad', 'setup'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange = (e) => {
        this.setState({ userInput: e.target.value });
    }

    filterNames(userInput) {
        let unfilteredArr = this.state.unFilteredArray;
        let filteredArr = unfilteredArr.filter((element) => element.includes((userInput)));
        this.setState({filteredArray: filteredArr});
    }


    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Strings: { JSON.stringify(this.state.unFilteredArray)}</span>
                <input className='inputLine' value={this.state.userInput} onChange={ (e) => this.handleChange(e)} />
                <button className='confirmationButton' onClick={ () => this.filterNames(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered Strings: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString;