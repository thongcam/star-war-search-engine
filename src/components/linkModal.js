import React from 'react';
import master from '../database/master';

const LinkModal = ({url,clickedmodal}) => {
  let name = '';
  const re = new RegExp("https://swapi.co/api/([a-z]*)/");
  let typeLink = '';
  try {
    typeLink = re.exec(url)[1];
    console.log(url);
  } catch (e) {
    console.log(url);
  }

  let a = [];
  master.forEach(thing => {
    a = a.concat(thing['assocArray']);
  })

  let json = a.filter(thing => {
    if (thing['url'] === url) {
      return true;
    } else {return false;  }
  })

  console.log(json);
  if (typeLink === 'films' && json[0] != undefined) {
    name = json[0].title;
  } else if(json[0] != undefined) {
    name = json[0].name;
  } else {
    return <div style={{display:'none'}}></div>;
  }
  const clickModal = () => {
    clickedmodal(url);
  }
  return(
    <span onClick={clickModal} className='link underline-hover blue'>
      {`${name}; `}
    </span>
  )
}

export default LinkModal;
