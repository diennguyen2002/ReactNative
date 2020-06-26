import React, {Component} from 'react';
import {View, StyleSheet, Platform, TouchableOpacity, Text} from 'react-native';
import List from './src/components/List';

// Flex box
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  render() {
    return (
      <View style={styles.container}>
        <List />
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
