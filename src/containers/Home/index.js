import React, { Component } from 'react';
import { Text } from 'react-native';
import { WingBlank } from 'antd-mobile';

type Props = {};

class Home extends Component<Props> {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <WingBlank>
        <Text>Home Screen</Text>
      </WingBlank>
    );
  }
}

export default Home;
