import React from 'react';
import FilterBox from '../components/FilterBox';

class FilterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      already:false,
    };
    this.rawList = [];
    this.data = this.props.data;
    this.FiltersList = this.data.map(obj =>
      {
        return(
        <FilterBox type={obj.type} key={obj.type} assocArray={obj.assocArray} tachColor={obj.tachColor} hexColor={obj.hexColor} filterClicked={this.updateFilterList}/>)
      }
    );
    this.updateRawList = this.updateRawList.bind(this);
  }


  updateFilterList = async (type) => {
    if (this.state[type] === 'on') {
      await this.setState({[type]: 'off'});
    } else {
      await this.setState({[type]: 'on'});
    }
    this.updateRawList()
  }

  updateRawList = async () => {
    this.rawList = [];
    const tempList = this.FiltersList.filter(filter => this.state[filter.props.type] === 'on');
    tempList.forEach(e => {
      this.rawList = this.rawList.concat(e.props.assocArray);
    });
    this.props.updateFilter(this.rawList);
  }

  componentDidMount() {
    this.data.map(obj => this.setState({[obj.type]:'on'}));
    if (!this.state.already){
      this.props.data.forEach(e => {
        this.rawList = this.rawList.concat(e.assocArray);
      });
      this.setState({already:true});
      this.props.updateFilter(this.rawList);
    }
  }

  render() {
    return(
      <div className='flex justify-around flex-wrap'>
        {this.FiltersList}
      </div>
    )
  }
}

export default FilterContainer;
