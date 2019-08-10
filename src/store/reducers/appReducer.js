import {
  UPDATE_URL,
  UPDATE_FILTER_ARR,
  UPDATE_FINAL_LIST,
  UPDATE_SEARCH_FIELD,
  UPDATE_SHOW_MODAL,
  CONCAT_MASTER
} from '../actions/actionTypes';

const initialState = {
  filtersArr : [],
  searchField : '',
  finalList:[],
  showModal: false,
  url: '',
  master:[],
}

const appReducer = (state = initialState, action) => {
  const checkExist = (stuff) => {
    if(typeof(stuff['name']) === 'string'){
      if (stuff['name'].toLowerCase().includes(state.searchField)) {
        return true;
      }
    } else if(typeof(stuff['title'] === 'string')){
        if(stuff['title'].toLowerCase().includes(state.searchField)) {
          return true;
      }
    }
    return false;
  }

  switch (action.type) {
    case UPDATE_URL:
        return {
          ...state,
          url: action.url
        }
      break;
    case UPDATE_FILTER_ARR:
      return {
        ...state,
        filtersArr: action.arr
      }
      break;
    case UPDATE_FINAL_LIST:
      return {
        ...state,
        finalList: state.filtersArr.filter(i => checkExist(i))
      }
      break;
    case UPDATE_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.event.target.value.toLowerCase()
      }
      break;
    case UPDATE_SHOW_MODAL:
      return {
        ...state,
        showModal: action.bool
      }
      break;
    case CONCAT_MASTER:
      return {
        ...state,
        master: state.master.concat([action.obj])
      }
      break;
    default:
      return state
  }
}

export default appReducer;
