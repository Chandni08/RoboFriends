import React from 'react';

const Searchbox=({searchfield,searchChange})=>{
    return(
        <input 
        className="pa3 ba b--green bg-lightest-blue mb3" 
        type='search' 
        placeholder="Search Robots"
        onChange={searchChange}
        >
        </input>
    );
}

export default Searchbox;