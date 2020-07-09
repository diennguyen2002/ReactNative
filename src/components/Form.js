import React, {PureComponent} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';
import {actionCreators} from '../redux/action/actionCreators';

class Form extends PureComponent {
  state = {
    en: '',
    vn: '',
  };
  toggleForm = () => {
    this.props.toggleForm();
  };
  addWord = () => {
    const {en, vn} = this.state;
    if (!en || !vn) {
      alert('Ban chua truyen du thong tin');
      return;
    }
    this.props.addWord(en, vn);
    this.setState({en: '', vn: ''});
    this.inputEn.clear();
    this.inputVn.clear();
  };
  renderForm = () => {
    if (this.props.shouldshowform) {
      return (
        <View>
          <View style={styles.containerTextInput}>
            <TextInput
              ref={ref => (this.inputEn = ref)}
              onChangeText={text => (this.state.en = text)}
              placeholder="English"
              style={styles.textInput}
            />
            <TextInput
              ref={ref => (this.inputVn = ref)}
              onChangeText={text => (this.state.vn = text)}
              placeholder="Vietnamese"
              style={styles.textInput}
            />
          </View>
          <View style={styles.containerTouchable}>
            <TouchableOpacity
              onPress={() => this.addWord()}
              style={styles.touchableAddword}>
              <Text style={styles.textTouchable}>Add word</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.toggleForm()}
              style={styles.touchableCancel}>
              <Text style={styles.textTouchable}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.buttonOpenForm}
          onPress={() => this.toggleForm()}>
          <Text style={styles.textOpenForm}>+</Text>
        </TouchableOpacity>
      );
    }
  };

  render() {
    console.log('render form');
    return this.renderForm();
  }
}
const styles = StyleSheet.create({
  containerTextInput: {
    width: '100%',
    height: 150,
    justifyContent: 'space-evenly',
  },
  textInput: {
    borderWidth: 1,
    height: 60,
    fontSize: 20,
    paddingHorizontal: 10,
  },
  touchableAddword: {
    backgroundColor: '#218838',
    padding: 15,
    borderRadius: 10,
  },
  textTouchable: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  touchableCancel: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
  },
  buttonOpenForm: {
    width: '100%',
    height: 50,
    backgroundColor: '#45B157',
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOpenForm: {
    color: 'white',
    fontSize: 30,
  },
  containerTouchable: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
});

const mapStateToProps = function(state) {
  return {shouldshowform: state.shouldshowform};
};

export default connect(
  mapStateToProps,
  actionCreators,
)(Form);
