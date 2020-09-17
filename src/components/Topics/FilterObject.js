import React, {Component} from 'react';

class FilterObjects extends Component {
    constructor() {
        super();

        this.state = {
            unFilteredArray: [
                {
                    name: 'Jimmy Joe',
                    title: 'Hack0r',
                    age: 12,
                },
                {
                    name: 'Jeremy Schrader',
                    age: 24,
                    hairColor: 'brown'
                },
                {
                    name: 'Carly Armstrong',
                    title: 'CEO',
                }
            ],
            userInput: '',
            filteredArray: []
        }

        
    }

    handleChange(e) {
        this.setState({userInput: e.target.value});
    }

    

    filterArray(property) {
        let newArr = [];
        let unfilteredArray = this.state.unFilteredArray;
       
        for(let i = 0; i < unfilteredArray.length; i++) {
            for (let key in unfilteredArray[i]) {
                if (key === property) {
                    newArr.push(unfilteredArray[i]);
                }
            }
        }

        this.setState({ filteredArray: newArr});
    }

    render(){
        return(
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: { JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className='inputLine' value={this.state.userInput} onChange={(e) => this.handleChange(e)}/>
                <button className='confirmationButton' onClick={ () => this.filterArray(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObjects;