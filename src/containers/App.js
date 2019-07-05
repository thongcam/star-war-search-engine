import React from 'react';
import '../style/App.css';
import ModalCard from '../components/Modal';
import FilterContainer from './FilterContainer';
import SearchBox from '../components/SearchBox';
import CardList from './CardList';
import master from '../database/master';
import Scroll from '../components/Scroll';
import ScrollUpButton from 'react-scroll-up-button';




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

  componentDidMount() {

  }

  render() {

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
            <FilterContainer updateFilter={this.updateFilter} data={master}/>
            <Scroll className='bt b--white bw2'>
              <CardList finalList={this.state.finalList} initializeModal={this.initializeModal} data={master}/>
            </Scroll>
            <ModalCard show={this.state.showModal} url={this.state.url} close={this.close} other={this.initializeModal}/>
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


// const App = () => (
//   <LiveProvider code= {code} scope={{Modal}}>
//     <LiveEditor/>
//     <LivePreview/>
//     <LiveError/>
//   </LiveProvider>
// );





export default App;
