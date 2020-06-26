import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Stylesheet_bt3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.group1}>
          <View style={styles.group1_l}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.group1_r}>
            <Text style={styles.text}>2</Text>
          </View>
        </View>
        <View style={styles.group2}>
          <View style={styles.group2_l}>
            <View style={styles.group2_l_top}>
              <Text style={styles.text}>3</Text>
            </View>
            <View style={styles.group2_l_bottom}>
              <Text style={styles.text}>4</Text>
            </View>
          </View>
          <View style={styles.group2_r}>
            <Text style={styles.text}>5</Text>
          </View>
        </View>
        <View style={styles.group3}>
          <View style={styles.group3_l}>
            <Text style={styles.text}>6</Text>
          </View>
          <View style={styles.group3_r}>
            <Text style={styles.text}>7</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    color: 'white',
  },
  group1: {
    flex: 1,
    flexDirection: 'row',
  },
  group1_l: {
    flex: 3,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  group1_r: {
    flex: 7,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  group2: {
    flex: 7,
    flexDirection: 'row',
  },
  group2_l: {
    flex: 7,
    backgroundColor: 'green',
  },
  group2_l_top: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  group2_l_bottom: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  group2_r: {
    flex: 3,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  group3: {
    flex: 2,
    flexDirection: 'row',
  },
  group3_l: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  group3_r: {
    flex: 1,
    backgroundColor: 'brown',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
