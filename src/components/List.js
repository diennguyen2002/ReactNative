import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import Form from './Form';
import Filter from './Filter';
import Word from './Word';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  onToggleForm = () => {
    this.setState({shouldshowform: !this.state.shouldshowform});
  };

  onToggleMemorized = item => {
    const newWords = this.state.words.map(word => {
      if (word.id === item.id) {
        const newWord = {...item, isMemorized: !item.isMemorized};
        return newWord;
      }
      return word;
    });
    this.setState({words: newWords});
  };

  onSetFilterMode = mode => {
    this.setState({filterMode: mode});
  };

  onRemoveWord = item => {
    const newWords = this.state.words.filter(word => {
      if (word.id === item.id) {
        return false;
      }
      return true;
    });
    this.setState({words: newWords});
  };

  onAddWord = (en, vn) => {
    const newWords = [...this.state.words];
    if (!en || !vn) {
      alert('Ban chua truyen du thong tin');
      return;
    }
    const newWord = {
      id: this.state.words.length + 1,
      en: en,
      vn: vn,
      isMemorized: false,
    };
    newWords.unshift(newWord);
    alert('Them du lieu thanh cong');
    this.setState({words: newWords});
  };

  render() {
    return (
      <View style={styles.container}>
        <Form
          shouldshowform={this.state.shouldshowform}
          onToggleForm={this.onToggleForm}
          onAddWord={this.onAddWord}
        />
        <Filter onSetFilterMode={this.onSetFilterMode} />
        <Word
          words={this.state.words}
          filterMode={this.state.filterMode}
          onRemoveWord={this.onRemoveWord}
          onToggleMemorized={this.onToggleMemorized}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
});
