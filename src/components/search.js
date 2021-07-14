import React from "react";
import "../css/search.css"

const Search = (props) => {
    return (
        <form> 
            <div className = "searchbox">
                <input
                onChange = {props.handleInputChange}
                value = {props.search}
                name = "search"
                type = "text"
                className = "form-control"
                placeholder = "Search by first or last name"
                id = "search"
                />
            </div>
        </form>
    )
}

export default Search;