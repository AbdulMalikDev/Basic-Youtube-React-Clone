import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {term: ''}
    }

    render() {
        return (
            <div className="search-bar">
                <input onChange={event => this.onInputChange(event)}/>
            </div>
        );
    }

    onInputChange(event){
        this.setState({term:event.target.value});
        this.props.onSearch(event.target.value)
    }
}

export default SearchBar;