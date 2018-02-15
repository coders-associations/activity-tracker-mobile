import React from 'react';
import { View } from 'react-native';
import { WingBlank, WhiteSpace } from 'antd-mobile';
import styles from './styles';

type Props = {
  children: any,
};

const Container = ({ children }: Props) => (
  <View style={styles.container}>
    <WingBlank>
      <WhiteSpace size="lg" />
      {children}
      <WhiteSpace size="lg" />
    </WingBlank>
  </View>
);

export default Container;
