import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { ActivityIndicator } from 'antd-mobile';
import { resetNavigation } from '../../lib/navigation';
import styles from './styles';

type Props = {
  navigation: any,
  logged: boolean,
};

class Loader extends Component<Props> {
  static navigationOptions = {
    header: null,
  };

  componentWillMount() {
    setTimeout(() => this.navigate(), 2000);
  }

  navigate() {
    const screen = this.props.logged ? 'Home' : 'AuthSignIn';

    resetNavigation(screen, this.props.navigation);
  }

  render() {
    return (
      <View style={styles.loader}>
        <ActivityIndicator
          animating
          size="large"
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({});
const mapStateToProps = state => ({
  logged: state.auth.logged,
});

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
