import React from 'react';

const Scroll = (props) => {
  return(
    <div style={{overflowY:'scroll',height:'65vh',width:'95vw'}} className='scroll'>
      {props.children}
    </div>
  )
}

export default Scroll;
