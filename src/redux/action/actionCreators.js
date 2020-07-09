import {actionTypes} from './actionTypes';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://servernode180520.herokuapp.com',
});

// word
function toggleMemorized(_id, _isMemorized) {
  return (dispatch) => {
    axiosInstance
      .put(`/word/${_id}`, {isMemorized: !_isMemorized})
      .then((response) => {
        const {success, word} = response.data;
        if (success && word) {
          dispatch({type: actionTypes.TOGGLE_MEMORIZED, _id: word._id});
        }
      })
      .catch((error) => console.log(error.message));
  };
}

function removeWord(_id) {
  return (dispatch) => {
    axiosInstance
      .delete(`/word/${_id}`)
      .then((response) => {
        const {success, word} = response.data;
        if (success && word) {
          dispatch({type: actionTypes.REMOVE_WORD, _id: word._id});
        }
      })
      .catch((error) => console.log(error.message));
  };
}

//form
function toggleForm() {
  return {
    type: actionTypes.TOGGLE_FORM,
  };
}

function addWord(en, vn) {
  return (dispatch) => {
    axiosInstance
      .post('/word', {en, vn})
      .then((response) => {
        const {success, word} = response.data;
        if (success && word) {
          dispatch({type: actionTypes.ADD_WORD, newWord: word});
        }
      })
      .catch((error) => console.log(error.message));
  };
}

//filter
function selectFilter(mode) {
  return {
    type: actionTypes.SELECT_FILTER,
    mode,
  };
}

//store
function fetchDataWords() {
  return (dispatch) => {
    axiosInstance
      .get('/word')
      .then((reponse) => {
        const data = reponse.data;
        const {success, words} = data;
        if (success && words) {
          dispatch({type: actionTypes.FETCH_DATA_WORDS, words});
        }
      })
      .catch((error) => console.log(error.message));
  };
}

export const actionCreators = {
  toggleMemorized,
  removeWord,
  toggleForm,
  addWord,
  selectFilter,
  fetchDataWords,
};
