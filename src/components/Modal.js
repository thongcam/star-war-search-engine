import React from 'react';
import Modal from 'react-bootstrap/Modal';
import LinkModal from './linkModal';
import master from '../database/master';


class ModalCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.re = new RegExp("https://swapi.co/api/([a-z]*)/");
    this.type = '';
    this.list = [];
    this.name = '';
    this.data = {};
    this.testSet = [];
    this.color ='';
  }

  otherModal = (url) => {
    this.props.other(url);
  }


  componentDidMount() {

  }

  getData = () => {
    // fetch(this.props.url)
    //   .then(response => response.json())
    //   .then(datajs => this.data = datajs);
    master.forEach(thing => {
      this.testSet = this.testSet.concat(thing['assocArray']);
    });
    const temp = this.testSet.filter(thing => thing['url'] === this.props.url);
    this.data = temp[0];
  }


  render() {
    if(this.props.show === true){this.getData();}
    if (this.data.url !== undefined){
      if (this.props.url.length > 1) {
        this.type = this.re.exec(this.props.url)[1];
      }
      this.list =  Object.keys(this.data).map(key => {
        if(!['created','edited','url'].includes(key)){
          let corresValue = this.data[String(key)];
          if (typeof(corresValue) === "object") {
            if (corresValue.length === 0) {
                  corresValue = 'None';
            } else {
              corresValue = corresValue.map(v => {
                return <LinkModal key={v} url={v} data={this.testSet} clickedmodal={this.otherModal}/>
              })
            }
          } else if(String(corresValue).includes('https')) {
            corresValue= <LinkModal url={corresValue} clickedmodal={this.otherModal} data={this.testSet}/>
          }
          return <li key={key}><span><b style={{textTransform:'capitalize'}}>{key.replace('_',' ')}:</b> {corresValue}</span></li>
        }
        return null;
      }
    );
      this.name = (this.type === 'films')? this.data['title'] : this.data['name'];
      this.color = master.filter(i => i.type === this.type)[0].tachColor;
    }
  return (

    <Modal show={this.props.show} onHide={this.props.close} scrollable={true} className='shadow-4'>
      <Modal.Header closeButton className={`h3 bg-${this.color}`}>
        <Modal.Title><span className={`pa1 ${this.color} bg-black di br2`}>#{this.type}</span>  {this.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          {this.list}
        </ul>
      </Modal.Body>
    </Modal>

  );
  }
}

export default ModalCard;
