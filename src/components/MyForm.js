import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class Form extends Component {
  state = {
    wordvn: '',
    worden: '',
  };
  addWord = () => {
    const words = this.props.dataFromList;
    //console.log(words);
    words.push({
      id: words.length + 1,
      en: this.state.worden,
      vn: this.state.wordvn,
      isMemorized: false,
    });
    this.props.cbListFromForm(words);
  };
  render() {
    return (
      <View style={styles.containerForm}>
        <View style={styles.containerInput}>
          <TextInput
            placeholder="Input English"
            style={styles.inputEn}
            onChangeText={value => this.setState({worden: value})}
            value={this.state.worden}
          />
          <TextInput
            placeholder="Input Vienamese"
            style={styles.inputVn}
            onChangeText={value => this.setState({wordvn: value})}
            value={this.state.wordvn}
          />
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.btnAddword}
            onPress={() => this.addWord()}>
            <Text style={styles.textBtn}>Add word</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCancel}>
            <Text style={styles.textBtn}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerForm: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInput: {
    padding: 10,
    backgroundColor: '#727272',
    width: '80%',
    height: 150,
    justifyContent: 'space-evenly',
  },
  inputEn: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    fontSize: 20,
  },
  inputVn: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    fontSize: 20,
  },
  containerButton: {
    backgroundColor: '#727272',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
  },
  btnAddword: {
    marginBottom: 10,
    backgroundColor: 'green',
    borderRadius: 10,
  },
  btnCancel: {
    marginBottom: 10,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  textBtn: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
    padding: 15,
  },
});
