import React from 'react';

const Scroll = (props) => {
  return(
    <div style={{overflowY:'scroll',height:'65vh',width:'95vw',-webkit-overflow-scrolling:'touch'}}>
      {props.children}
    </div>
  )
}

export default Scroll;
