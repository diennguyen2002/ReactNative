import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import Child from './Child';

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  onIncrease = () => {
    this.setState({count: this.state.count + 1});
  };
  onDecrease = () => {
    this.setState({count: this.state.count - 1});
  };
  onReset = () => {
    this.setState({count: 0});
  };
  render() {
    //console.log('Box');
    return (
      <View style={styles.container}>
        <Text style={styles.count}> Count: {this.state.count} </Text>
        <Child
          //valueCount={this.state.count}
          onIncrease={this.onIncrease}
          onDecrease={this.onDecrease}
          onReset={this.onReset}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').width / 15,
    color: 'black',
    fontFamily: 'DancingScript-Regular',
  },
});
