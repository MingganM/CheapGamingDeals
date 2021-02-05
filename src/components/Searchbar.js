import React from 'react'

export default function Searchbar(props) {
    const { handleSubmit, handleSearchChange } = props;

    return (
        <form className="Searchbar" onSubmit={handleSubmit}>
            <input 
                type="search"
                placeholder="Search For Games"
                className="Searchbar__input"
                onChange={handleSearchChange}
            />
            <button className="Searchbar__button">Search</button>
        </form>
    )
}
