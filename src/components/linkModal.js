import React from 'react';

const LinkModal = ({url,clickedmodal,data}) => {
  let name = '';
  const re = new RegExp("https://swapi.co/api/([a-z]*)/");
  let typeLink = re.exec(url)[1];

  let json = data.filter(thing => thing['url'] === url);

  if (typeLink === 'films' && json[0] !== undefined) {
    name = json[0].title;
  } else if(json[0] !== undefined) {
    name = json[0].name;
  } else {
    return <div style={{display:'none'}}></div>;
  }
  const clickModal = () => {
    clickedmodal(url);
  }
  return(
    <span onClick={clickModal} className='link underline-hover blue' style={{cursor:'pointer'}}>
      {`${name}; `}
    </span>
  )
}

export default LinkModal;
