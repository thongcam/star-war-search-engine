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
    // try {
    //   this.type = this.re.exec(this.props.url)[1];
    // } catch (e) {
    //   console.log(this.props.url);
    // }
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
    this.getData();
  }

  getData = () => {
    // fetch(this.props.url)
    //   .then(response => response.json())
    //   .then(datajs => this.data = datajs);
    master.forEach(thing => {
      this.testSet = this.testSet.concat(thing['assocArray']);
    });
    const temp = this.testSet.filter(thing => this.test(thing['url']));
    this.data = temp[0];
  }

  test = (thing) => {

    if (thing === this.props.url) {
      console.log(thing,this.props.url);
      return true;
    } else {
      return false;
    }
  }

  render() {
    this.getData();
    if (this.data != undefined){
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
                return <LinkModal url={v} clickedmodal={this.otherModal}/>
              })
            }
          } else if(String(corresValue).includes('https')) {
            corresValue= <LinkModal url={corresValue} clickedmodal={this.otherModal}/>
          }
          return <li><span><b style={{textTransform:'capitalize'}}>{key.replace('_',' ')}:</b> {corresValue}</span></li>
        }
      });
      this.name = (this.type === 'films')? this.data['title'] : this.data['name'];
      this.color = master.filter(i => i.type === this.type)[0].tachColor;
    }
  return (

    <Modal show={this.props.show} onHide={this.props.close} scrollable={true} className='shadow-4'>
      <Modal.Header closeButton className={`h3 bg-${this.color}`}>
        <Modal.Title ><span className={`pa1 ${this.color} bg-black di br2`}>#{this.type}</span>  {this.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul >
          {this.list}
        </ul>
      </Modal.Body>
    </Modal>

  );
  }
}

export default ModalCard;
