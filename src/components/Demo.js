import React, {Component, PureComponent} from 'react';
import {Text, View} from 'react-native';

export default class Demo extends PureComponent {
  state = {myName: 'Hoang'};

  componentDidMount() {
    console.log('didMount');

    this.setState({myName: 'Hoang'});
  }

  componentDidUpdate() {
    console.log('didUpdate');

    console.log(
      `Component này đã render lại với state.myName: ${this.state.myName}`,
    );
  }

  render() {
    console.log('render');

    return <Text>My name is {this.state.myName}</Text>;
  }
}
