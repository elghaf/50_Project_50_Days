import React from 'react'

class SearchBar extends React.Component{
    // Constuctor creation 
    constructor(){
        super();
        this.state = {term: 'aa'};
        //console.log(this.state[0]); == aa
    }
    
    onInputChange(term){
        console.log(term);
        this.setState({term});
        this.props.onTermChange(term);
    }
   

    render(){

        return(
            <div className='search'>
                <input onChange = {event =>  this.onInputChange(event.target.value)}/>
            </div>
        )
    }
}

export default SearchBar;