import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {connect} from 'react-redux';

class Child extends Component {
  render() {
    const {dispatch} = this.props;
    return (
      <View style={styles.groupBtn}>
        <TouchableOpacity
          onPress={() => {
            dispatch({type: 'INCREASE'});
          }}>
          <Text style={styles.increase}> Increase </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch({type: 'DESCREASE'});
          }}>
          <Text style={styles.decrease}> Decrease </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch({type: 'RESET', reset: 0});
          }}>
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

export default connect()(Child);
