import React, {PureComponent} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class Form extends PureComponent {
  state = {
    en: '',
    vn: '',
  };
  addWord = () => {
    const {en, vn} = this.state;
    this.props.onAddWord(en, vn);
    this.setState({en: '', vn: ''});
    this.inputEn.clear();
    this.inputVn.clear();
  };
  renderForm = shouldshowform => {
    if (shouldshowform) {
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
              onPress={() => this.props.onToggleForm()}
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
          onPress={() => this.props.onToggleForm()}>
          <Text style={styles.textOpenForm}>+</Text>
        </TouchableOpacity>
      );
    }
  };

  render() {
    console.log('render form');
    return this.renderForm(this.props.shouldshowform);
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