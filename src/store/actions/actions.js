import {
  UPDATE_URL,
  UPDATE_FILTER_ARR,
  UPDATE_FINAL_LIST,
  UPDATE_SEARCH_FIELD,
  UPDATE_SHOW_MODAL,
  CONCAT_MASTER
} from './actionTypes';

export const updateURL = (url) => {
  return {
    type: UPDATE_URL,
    url : url
  }
}

export const updateFilterArr = (arr) => {
  return {
    type: UPDATE_FILTER_ARR,
    arr: arr
  }
}

export const updateFinalList = () => {
  return {
    type: UPDATE_FINAL_LIST
  }
}

export const updateSearchField = (event) => {
  return {
    type: UPDATE_SEARCH_FIELD,
    event: event
  }
}

export const updateShowModal = (bool) => {
  return {
    type: UPDATE_SHOW_MODAL,
    bool: bool
  }
}

export const concatMaster = (obj) => {
  return {
    type: CONCAT_MASTER,
    obj: obj
  }
}
