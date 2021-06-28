import React from 'react';

class SearchBar extends React.Component {
    state = {event:''}

    render(){
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search </label>
                        <input type = 'text' 
                        value={this.state.event}
                        onChange={(e)=>this.setState({event:e.target.value.toUpperCase()})}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;