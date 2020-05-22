import React from 'react';
import './SearchBox.css';
import classnames from 'classnames';

class SearchBox extends React.Component {
    constructor() {
        super();
        this.state = {
            isFocused: false
        }
    }

    changeState() {
        const { isFocused } = this.state;
        if (isFocused) {
            this.setState({isFocused: !isFocused});
        } else {
            this.setState({isFocused: !isFocused});
        }
    }

    render() {
        const { isFocused } = this.state;

        return (
            <div className={classnames('search-box')}>
                <input 
                    onFocus={this.changeState.bind(this)} 
                    onBlur={this.changeState.bind(this)} 
                    type="text" className="search-input" 
                    placeholder="Type something to search ..." 
                />
                <div className={
                        classnames('search-button', {'hide': isFocused})
                    }>
                    <div class="fas fa-search"></div>
                </div>
            </div>
        );
    }
}

export default SearchBox;