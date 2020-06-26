import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Stylesheet_bt4 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.group1}>
          <View style={styles.group1_l}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.group1_r}>
            <View style={styles.group1_r_top}>
              <Text style={styles.text}>3</Text>
            </View>
            <View style={styles.group1_r_bottom}>
              <Text style={styles.text}>4</Text>
            </View>
          </View>
        </View>
        <View style={styles.group2}>
          <View style={styles.group2_l}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.group2_m}>
            <View style={styles.group2_m_top}>
              <Text style={styles.text}>5</Text>
            </View>
            <View style={styles.group2_m_bottom}>
              <Text style={styles.text}>6</Text>
            </View>
          </View>
          <View style={styles.group2_r}>
            <View style={styles.group2_r_t}>
              <Text style={styles.text}>7</Text>
            </View>
            <View style={styles.group2_r_m}>
              <Text style={styles.text}>8</Text>
            </View>
            <View style={styles.group2_r_b}>
              <Text style={styles.text}>9</Text>
            </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(100, 0, 100)',
  },
  group1_r: {
    flex: 7,
  },
  group1_r_top: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(100, 0, 50)',
  },
  group1_r_bottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(50, 50, 100)',
  },
  group2: {
    flex: 1,
    flexDirection: 'row',
  },
  group2_l: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(223, 50, 255)',
  },
  group2_m: {
    flex: 5,
  },
  group2_m_top: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(255, 0, 0)',
  },
  group2_m_bottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(0, 255, 255)',
  },
  group2_r: {
    flex: 2,
  },
  group2_r_t: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(10, 0, 150)',
  },
  group2_r_m: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(150, 0, 10)',
  },
  group2_r_b: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(10, 150, 200)',
  },
});
