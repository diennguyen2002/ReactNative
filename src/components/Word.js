import React, {PureComponent} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class Word extends PureComponent {
  itemFlatList = (item, index) => {
    const {filterMode} = this.props;
    // Cac truong hop phai return giao dien
    // Th1 : Show_All
    // Th2 : Show_Forgot va item.memorized
    // Th3 : Show_memorized va !item.memorized
    if (filterMode === 'Show_Forgot' && !item.isMemorized) {
      return null;
    } else if (filterMode === 'Show_Memorized' && item.isMemorized) {
      return null;
    } else {
      return (
        <View style={styles.wordgroup}>
          <View style={styles.textgroup}>
            <Text style={styles.textEn}>{item.en}</Text>
            <Text style={styles.textVn}>
              {item.isMemorized ? '----' : item.vn}
            </Text>
          </View>
          <View style={styles.textgroup}>
            <TouchableOpacity
              onPress={() => this.props.onToggleMemorized(item)}
              style={
                item.isMemorized
                  ? styles.buttonisForgot
                  : styles.buttonisMemorized
              }>
              <Text style={styles.textisMemorized}>
                {item.isMemorized ? 'Forgot' : 'isMemorized'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.onRemoveWord(item)}
              style={styles.buttonRemove}>
              <Text style={styles.textRemove}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  render() {
    console.log('render word');
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        extraData={this.props.words}
        keyExtractor={(item, index) => item.id.toString()}
        data={this.props.words}
        renderItem={({item, index}) => this.itemFlatList(item, index)}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  wordgroup: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
    paddingVertical: 5,
  },
  textgroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  buttonisMemorized: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  buttonisForgot: {
    padding: 10,
    backgroundColor: '#218838',
    borderRadius: 5,
  },
  buttonRemove: {
    padding: 10,
    backgroundColor: '#E0A800',
    borderRadius: 5,
  },
  textisMemorized: {
    fontSize: 20,
    color: 'white',
  },
  textRemove: {
    fontSize: 20,
    color: 'white',
  },
  textEn: {
    color: '#45B157',
    fontSize: Dimensions.get('window').width / 15,
    fontWeight: '500',
  },
  textVn: {
    color: '#DA2846',
    fontSize: Dimensions.get('window').width / 15,
    fontWeight: '500',
  },
  separator: {
    height: 5,
  },
});
