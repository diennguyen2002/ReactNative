import React, {Component} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import List from './src/components/List';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

console.disableYellowBox = true; // hide warning

const defaultState = {
  words: [
    {id: 1, en: 'One', vn: 'Mot', isMemorized: true},
    {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
    {id: 3, en: 'Three', vn: 'Ba', isMemorized: false},
    {id: 4, en: 'Four', vn: 'Bon', isMemorized: false},
    {id: 5, en: 'Five', vn: 'Nam', isMemorized: true},
  ],
  shouldshowform: false,
  filterMode: 'Show_All',
};

const store = createStore((state = defaultState, action) => {
  // định nghĩa ra actions
  if (action.type === 'TOGGLE_FORM') {
    return {...state, shouldshowform: !state.shouldshowform};
  }
  if (action.type === 'ADD_WORD') {
    const newWords = [...state.words];
    if (!action.en || !action.vn) {
      alert('Ban chua truyen du thong tin');
      return;
    }
    const newWord = {
      id: state.words.length + 1,
      en: action.en,
      vn: action.vn,
      isMemorized: false,
    };
    newWords.unshift(newWord);
    return {...state, words: newWords};
  }
  if (action.type === 'SELECT_FILTER') {
    return {...state, filterMode: action.mode};
  }
  if (action.type === 'TOGGLE_MEMORIZED') {
    const newWords = state.words.map(word => {
      if (word.id === action.item.id) {
        const newWord = {...action.item, isMemorized: !action.item.isMemorized};
        return newWord;
      }
      return word;
    });
    return {...state, words: newWords};
  }
  if (action.type === 'ON_REMOVED') {
    const newWords = state.words.filter(word => {
      if (word.id === action.item.id) {
        return false;
      }
      return true;
    });
    return {...state, words: newWords};
  }
  return state;
});

// console.log(store.getState());
// store.dispatch({type: 'INCREASE'});
// console.log(store.getState());

// Flex box
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <List />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 50 : 0,
    marginBottom: Platform.OS === 'ios' ? 25 : 0,
    flex: 1,
  },
});

export default App;
