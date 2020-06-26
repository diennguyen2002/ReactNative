import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Stylesheet_bt2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.group1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.group2}>
          <View style={styles.group2_left}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.group2_right}>
            <View style={styles.group2_right_top}>
              <Text style={styles.text}>3</Text>
            </View>
            <View style={styles.group2_right_bottom}>
              <View style={styles.group2_right_bottom_1}>
                <Text style={styles.text}>4</Text>
              </View>
              <View style={styles.group2_right_bottom_2}>
                <Text style={styles.text}>5</Text>
              </View>
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
    flex: 0.25,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  group2: {
    flex: 0.75,
    backgroundColor: 'yellow',
    flexDirection: 'row',
  },
  group2_left: {
    flex: 0.25,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  group2_right: {
    flex: 0.75,
  },
  group2_right_top: {
    flex: 0.75,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  group2_right_bottom: {
    flex: 0.25,
    flexDirection: 'row',
  },
  group2_right_bottom_1: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  group2_right_bottom_2: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
