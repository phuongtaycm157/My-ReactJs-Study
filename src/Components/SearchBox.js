import React from 'react';
import './SearchBox.css';
import classnames from 'classnames';

class SearchBox extends React.Component {
    constructor() {
        super();
        this.state = {
            isFocused: false,
          overLength: false
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
  
  changeStateOverLength (length) {
        const { overLength } = this.state;
        if (length > 10) {
            this.setState({overLength: true});
        } else {
            this.setState({overLength: false});
        }
    }

    checkOverLength (id, cb) {
        const input = document.getElementById(id);
        // console.log(input.value);
        cb(input.value.length);
    }

    render() {
        const { isFocused } = this.state;

        return (
            <div className={classnames('search-box')}>
                <input 
                    onFocus={this.changeState.bind(this)} 
                    onBlur={this.changeState.bind(this)} 
                  onKeyUp={this.checkOverLength.bind(null,'input', this.changeStateOverLength.bind(this))}
                    id="input"
                    type="text" 
                  className={classnames('search-input', {'border-red': this.state.overLength})}
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