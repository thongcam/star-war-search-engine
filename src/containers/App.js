import React from 'react';
import '../style/App.css';
import ModalCard from '../components/Modal';
import FilterContainer from './FilterContainer';
import SearchBox from '../components/SearchBox';
import CardList from './CardList';
import Scroll from '../components/Scroll';
import ScrollUpButton from 'react-scroll-up-button';
import masterTemplate from './masterTemplate';
import { css } from '@emotion/core';
import { ScaleLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filtersArr : [],
      searchField : '',
      finalList:[],
      showModal: false,
      url: '',
      master:[],
    };
    this.asyncOp = this.asyncOp.bind(this);
  }

  updateFilter = async (arr) => {
    await this.setState({filtersArr:arr});
    await this.updateFinal()
  }

  updateSearch = async (event) => {

    await this.setState({searchField:event.target.value.toLowerCase()});
    await this.updateFinal()
  }

  checkExist = (stuff) => {
    if(typeof(stuff['name']) === 'string'){
      if (stuff['name'].toLowerCase().includes(this.state.searchField)) {
        return true;
      }
    } else if(typeof(stuff['title'] === 'string')){
        if(stuff['title'].toLowerCase().includes(this.state.searchField)) {
          return true;
      }
    }
    return false;
  }

  updateFinal = () => {
    this.setState({finalList: this.state.filtersArr.filter(i => this.checkExist(i))});
  }

  initializeModal = async (url) => {
    await this.setState({url:url});
    if (!this.state.showModal) {
      await this.setState({showModal:true});
    }
  }

  close = async (event) => {
    await this.setState({showModal:false});
  }

  alert = () =>{
    alert('An app that helps you search for any Star Wars stuff through the SWAPI.');

  }

  asyncOp = async (category,i,array,obj) => {
    const response = await fetch('https://swapi.co/api/'+ category +'/?page=' + i);
    const objRes = await response.json();
    if (objRes.next===null) {
      array = await array.concat(objRes.results);
      obj.assocArray = array
      this.setState({
        master: this.state.master.concat([obj])
      })
      return true;
    } else {
      i += 1;
      array = await array.concat(objRes.results);
      await this.asyncOp(category,i,array,obj);
    }
  }

  componentDidMount() {
    masterTemplate.forEach(async function(obj){
      await this.asyncOp(obj.type,1,[],obj);
    }, this);
  }

  render() {
      const content = (this.state.master.length === 6)?
        <div>
          <FilterContainer updateFilter={this.updateFilter} data={this.state.master}/>
          <Scroll className='bt b--white bw2'>
            <CardList finalList={this.state.finalList} initializeModal={this.initializeModal} data={this.state.master}/>
          </Scroll>
          <ModalCard show={this.state.showModal} url={this.state.url} close={this.close} other={this.initializeModal} master={this.state.master}/>
        </div>
        :
        <div className='sweet-loading tc mt4' style={{height:'55vh'}}>
        <ScaleLoader
          css={override}
          height={50}
          width={15}
          radius={10}
          sizeUnit={"px"}
          color={'#FFF'}
        />
        <h2 className='mt2 white'>LOADING...</h2>
      </div>
      return(
        <div style={{
          height:'auto',
          backgroundImage: "url(https://steamuserimages-a.akamaihd.net/ugc/916912476088733298/A9222CAD7EAE0A34395B21322CE4742610E9B422/)",
          backgroundPosition: 'absolute',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
          <div className='flex flex-column items-center'>
            <h1 style={{fontFamily:"'Press Start 2P', cursive",color:'yellow'}} >STAR WARS SEARCH ENGINE</h1>
            <SearchBox updateSearch={this.updateSearch} />
            <h2 className='f2 self-start ph4 white underline'>Filters:</h2>
            {content}
          </div>
          <div><ScrollUpButton style={{margin:' 4vh 3vw'}} className='grow'/></div>
          <div className='bg-dark-gray footer'>
            <div className="col">
              <img src={require("../GitHub-Mark-32px.png")} alt=""/>
              <a href="https://github.com/thongcam/star-war-search-engine" className='link underline-hover white f5 ml2'>View on GitHub</a>
              <div onClick={this.alert} className='link underline-hover white f5 ml4' style={{cursor:'pointer'}}>About this app</div>
            </div>
          </div>
        </div>
      )
  }
}

export default App;
