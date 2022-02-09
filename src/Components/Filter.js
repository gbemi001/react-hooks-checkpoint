import React, {useState} from 'react';

export const Filter = (props) => {
    const[searchValue, setSearchValue] = useState("")

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value)
    }
    const resetInputField = () => {
        setSearchValue("")
    }
    const callSearchFunction = (e) => {
        e.preventDefault();
        props.filter(searchValue)
        resetInputField("")
    }
    return(
        <div>
        <h2>...Or Search For Movies. </h2>
        <form>
            <input value={searchValue} onChange={handleSearchInputChanges} type="text"/>
            <input type="submit" value="SEARCH" onClick={callSearchFunction}/>
        </form>
        </div>
    );
    
}