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

{/* <div>
  <div className='dib br3 ma2 grow shadow-5'>
    <p className='pa1 yellow bg-black di br2 '>#People</p>
    <h1 className='ph3'>Luke Skywalker</h1>
    <div className='tc pt3 pb3 bg-yellow ph3' style={{cursor:'pointer'}}>See more information</div>
  </div>
  <div className='dib br3 ma2 grow shadow-5'>
    <p className='pa1 blue bg-black di br2 '>#Films</p>
    <h1 className='ph3'>A New Hope</h1>
    <div className='tc pt3 pb3 bg-blue ph3' style={{cursor:'pointer'}}>See more information</div>
  </div>
  <div className='dib br3 ma2 grow shadow-5'>
    <p className='pa1 red bg-black di br2 '>#Starships</p>
    <h1 className='ph3'>Death Stars</h1>
    <div className='tc pt3 pb3 bg-red ph3' style={{cursor:'pointer'}}>See more information</div>
  </div>
  <div className='dib br3 ma2 grow shadow-5'>
    <p className='pa1 light-purple bg-black di br2 '>#Vehicles</p>
    <h1 className='ph3'>Sand Crawler</h1>
    <div className='tc pt3 pb3 bg-light-purple ph3' style={{cursor:'pointer'}}>See more information</div>
  </div>
  <div className='dib br3 ma2 grow shadow-5'>
    <p className='pa1 green bg-black di br2 '>#Species</p>
    <h1 className='ph3'>Wookie</h1>
    <div className='tc pt3 pb3 bg-green ph3' style={{cursor:'pointer'}}>See more information</div>
  </div>
  <div className='dib br3 ma2 grow shadow-5'>
    <p className='pa1 light-pink bg-black di br2 '>#Planets</p>
    <h1 className='ph3'>Tatooine</h1>
    <div className='tc pt3 pb3 bg-light-pink ph3' style={{cursor:'pointer'}}>See more information</div>
  </div>
</div> */}
