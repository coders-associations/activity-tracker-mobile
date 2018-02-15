import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { ActivityIndicator } from 'antd-mobile';
import { enableNetworkStatus, disableNetworkStatus, enableApiStatus, disableApiStatus } from '../../reducers/app';
import AppService from '../../services/app-service';
import resetNavigation from '../../lib/navigation';
import styles from './styles';

type Props = {
  navigation: any,
  logged: boolean,
  networkStatus: boolean,
  apiStatus: boolean,
  enableNetworkStatus: any,
  disableNetworkStatus: any,
  enableApiStatus: any,
  disableApiStatus: any,
};

type State = {
  isApplicationReady: boolean,
};

class Loader extends Component<Props, State> {
  static navigationOptions = {
    header: null,
  };

  state = {
    isApplicationReady: false,
  }

  componentDidMount() {
    AppService.getNetworkConnectionStatus(isConnected => this.getNetworkStatus(isConnected));
  }

  getApiStatus() {
    AppService
      .dispatch()
      .then(
        () => {
          this.props.enableApiStatus();
          this.navigate();
        },
        () => {
          this.props.disableApiStatus();
        },
      )
      .finally(() => this.setState({ isApplicationReady: true }));
  }

  getNetworkStatus(isConnected) {
    if (isConnected) {
      this.props.enableNetworkStatus();
      this.getApiStatus();
    } else {
      this.props.disableNetworkStatus();
      this.props.disableApiStatus();

      this.setState({ isApplicationReady: true });
    }
  }

  navigate() {
    const screen = this.props.logged ? 'Home' : 'AuthSignIn';

    resetNavigation(screen, this.props.navigation);
  }

  render() {
    const { networkStatus, apiStatus } = this.props;
    const { isApplicationReady } = this.state;

    return (
      <View style={styles.loader}>
        {!isApplicationReady && (
          <ActivityIndicator
            animating
            size="large"
          />
        )}

        {isApplicationReady && (
          <View>
            {!networkStatus && !apiStatus && (
              <View>
                <Text style={styles.loaderMessage}>
                  You are offline
                </Text>

                <Text style={styles.loaderMessageInfo}>
                  Internet connection is required{'\n'} to run this application
                </Text>
              </View>
            )}

            {networkStatus && !apiStatus && (
              <View>
                <Text style={styles.loaderMessage}>
                  API is down
                </Text>

                <Text style={styles.loaderMessageInfo}>
                  We couldn&apos;t connect to API server.{'\n'} Please try again later.
                </Text>
              </View>
            )}
          </View>
        )}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  enableNetworkStatus: () => dispatch(enableNetworkStatus()),
  disableNetworkStatus: () => dispatch(disableNetworkStatus()),
  enableApiStatus: () => dispatch(enableApiStatus()),
  disableApiStatus: () => dispatch(disableApiStatus()),
});

const mapStateToProps = state => ({
  networkStatus: state.app.networkStatus,
  apiStatus: state.app.apiStatus,
  logged: state.auth.logged,
});

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
