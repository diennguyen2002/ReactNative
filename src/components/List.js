import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import Form from './Form';
import Filter from './Filter';
import Word from './Word';

import {connect} from 'react-redux';

class List extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Form />
        <Filter />
        <Word />
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

export default connect()(List);
