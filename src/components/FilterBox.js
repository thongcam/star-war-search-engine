import React from 'react';
import '../style/FilterBox.css'


class FilterBox extends React.Component {
  constructor() {
    super();
    this.state = {
      status : 'on'
    }

    this.clicked = this.clicked.bind(this);
  }

  clicked = () => {
    if (this.state.status === 'on') {
      this.setState({status:'off'});
    } else {
      this.setState({status:'on'});
    }
    this.props.filterClicked(this.props.type);
  }

  render() {
    if (this.state.status === 'on'){
      return(
        <div className={`dib br2 ma3 pr3 bb bw2 b--${this.props.tachColor} grow shadow-5 flex items-center bg-white`} onClick={this.clicked}>
           <div className='ma3 f3 noselect'>#{this.props.type}</div>
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" style={{fill:this.props.hexColor}}/></svg>
        </div>
      )
    } else {
      return(
        <div className='dib br2 ma3 pr3 bb bw2 b--moon-gray grow shadow-5 flex items-center bg-white' onClick={this.clicked}>
           <div className='ma3 f3 noselect'>#{this.props.type}</div>
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" style={{fill:'CCC'}}/></svg>
        </div>
      )
    }
  }
}

export default FilterBox;
