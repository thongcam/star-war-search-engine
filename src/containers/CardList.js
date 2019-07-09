import React from 'react';
import Card from '../components/Card'

class CardList extends React.Component {
  constructor(props) {
    super(props);

    this.re = new RegExp("https://swapi.co/api/([a-z]*)/");
  }

  seeMoreInfo = (url) => {
    this.props.initializeModal(url)
  }

  render() {
    const Cardlist = this.props.finalList.map(item => {
      const url = item['url'];
      const type = this.re.exec(url)[1];
      let name =''
      if (type === 'films') {
        name = item['title'];
      } else { name = item['name'];}
      return (<Card name={name} key={name} type={type} url={url} data={this.props.data} seeMoreInfo = {this.seeMoreInfo}/>);
    });
    return(
      <div className='mv5 mh5 flex flex-wrap justify-center'>
          {Cardlist}
      </div>
    )
  }
}

export default CardList;
