/* eslint-disable prettier/prettier */
import React, {PureComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {connect} from 'react-redux';
import { actionCreators } from '../redux/action/actionCreators';

class Filter extends PureComponent {
  renderFilter = () => {
    return (
      <View style={styles.containerPickerStyle}>
        <RNPickerSelect
          onValueChange={value => {
            this.props.selectFilter(value);
          }}
          items={[
            {label: 'Show All', value: 'Show_All'},
            {label: 'Show Forgot', value: 'Show_Forgot'},
            {label: 'Show Memorized', value: 'Show_Memorized'},
          ]}
        />
      </View>
    );
  };
  render() {
    console.log('render filter');
    return this.renderFilter();
  }
}

const styles = StyleSheet.create({
  containerPickerStyle: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10,
  },
});

export default connect(null, actionCreators)(Filter);

