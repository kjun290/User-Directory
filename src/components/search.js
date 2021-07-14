import React from "react";
import "../css/search.css"

const Search = (props) => {
    return (
            <div className = "search">
                <form clasName = "form-inline">
                <input
                onChange = {props.handleInputChange}
                value = {props.search}
                type = "search"
                className = "form-control"
                placeholder = "Search by first or last name"
                id = "search"
                />
                </form>
                </div>
    )
}

export default Search;