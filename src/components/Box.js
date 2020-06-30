import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import Child from './Child';

import {connect} from 'react-redux'

class Box extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.count}> Count: {this.props.count} </Text>
        <Child />
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

const mapStateToProps = function(state) {
  return {count: state}
}

export default connect(mapStateToProps)(Box)
