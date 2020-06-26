import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

// Flex box
class Stylesheet_bt1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerVertical}>
          <View
            style={{...styles.wrapperText1, backgroundColor: randomColor()}}>
            <Text style={styles.textStyleVertical}>A</Text>
          </View>
          <View
            style={{...styles.wrapperText1, backgroundColor: randomColor()}}>
            <Text style={styles.textStyleVertical}>B</Text>
          </View>
          <View
            style={{...styles.wrapperText1, backgroundColor: randomColor()}}>
            <Text style={styles.textStyleVertical}>C</Text>
          </View>
          <View
            style={{...styles.wrapperText1, backgroundColor: randomColor()}}>
            <Text style={styles.textStyleVertical}>D</Text>
          </View>
        </View>
        <View style={styles.containerHorizontal}>
          <View
            style={{...styles.wrapperText2, backgroundColor: randomColor()}}>
            <Text style={styles.textStyleVertical}>A</Text>
          </View>
          <View
            style={{...styles.wrapperText2, backgroundColor: randomColor()}}>
            <Text style={styles.textStyleVertical}>B</Text>
          </View>
          <View
            style={{...styles.wrapperText2, backgroundColor: randomColor()}}>
            <Text style={styles.textStyleVertical}>C</Text>
          </View>
          <View
            style={{...styles.wrapperText2, backgroundColor: randomColor()}}>
            <Text style={styles.textStyleVertical}>D</Text>
          </View>
        </View>
      </View>
    );
  }
}
const randomColor = () => {
  return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() *
    255})`;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 25,
    flex: 1,
    flexDirection: 'column',
  },
  containerVertical: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'column',
  },
  wrapperText1: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerHorizontal: {
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'row',
  },
  wrapperText2: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyleVertical: {
    color: 'white',
  },
});

export default Stylesheet_bt1;
