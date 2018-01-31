import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, NetInfo } from 'react-native';
import { ActivityIndicator } from 'antd-mobile';
import resetNavigation from '../../lib/navigation';
import styles from './styles';

type Props = {
  navigation: any,
  logged: boolean,
};

type State = {
  isOffline: boolean,
};

class Loader extends Component<Props, State> {
  static navigationOptions = {
    header: null,
  };

  state = {
    isOffline: false,
  }

  componentDidMount() {
    NetInfo.isConnected.fetch().then().done(() => {
      NetInfo.isConnected.addEventListener('connectionChange', isConnected => this.dispatchConnected(isConnected));
    });
  }

  dispatchConnected(isConnected) {
    this.setState({ isOffline: isConnected });
    this.navigate();
  }

  navigate() {
    const screen = this.props.logged ? 'Home' : 'AuthSignIn';

    if (!this.state.isOffline) {
      resetNavigation(screen, this.props.navigation);
    }
  }

  render() {
    const { isOffline } = this.state;

    return (
      <View style={styles.loader}>
        {!isOffline && (
          <ActivityIndicator
            animating
            size="large"
          />
        )}

        {isOffline && (
          <View style={styles.loaderOffline}>
            <Text style={styles.loaderOfflineTitle}>
              You are offline
            </Text>

            <Text style={styles.loaderOfflineSubtitle}>
              Please turn on internet connection
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const mapDispatchToProps = () => ({});
const mapStateToProps = state => ({
  logged: state.auth.logged,
});

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
