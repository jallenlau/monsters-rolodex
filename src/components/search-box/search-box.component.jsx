import './search-box.styles.css'

const SearchBox = ({className, placeholder, onhandlerChange}) => (
    <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onhandlerChange}
    />

);

export default SearchBox;

//bulit in class components
/*
import { Component } from "react";
import './search-box.styles.css'

class SearchBox extends Component {
    render() {
        return (
            <input
                className= {`search-box ${this.props.className}`}
                type='search'
                placeholder={this.props.placeholder}
                onChange={this.props.onhandlerChange}
            />
        );
    }
}

export default SearchBox;
*/