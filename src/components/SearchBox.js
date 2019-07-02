import React from 'react';


const SearchBox = ({updateSearch}) => {
  return (
      <div className ='pa2'>
        <input placeholder="Search Star Wars stuff..." className='pa4 fl  ba b--dashed b--yellow br1 bw2' onChange={updateSearch} style={{width:'40vw'}}/>
      </div>
  );
}

export default SearchBox;
