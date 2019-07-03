import React from 'react';


const Card = ({name,type,url,data,seeMoreInfo}) => {
  const _onClick = () => {
    seeMoreInfo(url);
  }
  const color = data.filter(i => i.type === type)[0].tachColor;
  return (
      <div className='dib br3 ma4 grow shadow-5 bg-white'>
        <p className={`pa1 ${color} bg-black di br2`}>#{type}</p>
        <h1 className='ph3'>{name}</h1>
        <div className={`tc pt3 pb3 bg-${color} ph3 underline`} style={{cursor:'pointer'}} onClick={_onClick}>See more information</div>
      </div>
  )
}

export default Card;
