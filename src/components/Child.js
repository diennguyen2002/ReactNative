import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

export default class Child extends Component {
  render() {
    //console.log('child');
    return (
      <View style={styles.groupBtn}>
        <TouchableOpacity onPress={this.props.onIncrease}>
          <Text style={styles.increase}> Increase </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onDecrease}>
          <Text style={styles.decrease}> Decrease </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onReset}>
          <Text style={styles.reset}> Reset </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  groupBtn: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 5,
  },
  increase: {
    fontSize: Dimensions.get('window').width / 15,
    backgroundColor: 'green',
    borderRadius: 15,
  },
  decrease: {
    fontSize: Dimensions.get('window').width / 15,
    backgroundColor: 'red',
    borderRadius: 15,
  },
  reset: {
    fontSize: Dimensions.get('window').width / 15,
    backgroundColor: 'orange',
    borderRadius: 15,
  },
});
