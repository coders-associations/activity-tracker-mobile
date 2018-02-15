import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { InputItem, Button } from 'antd-mobile';
import { setToken, login } from '../../../reducers/auth';
import AuthService from '../../../services/auth-service';
import { Container } from '../../../components';
import resetNavigation from '../../../lib/navigation';
import styles from './styles';

type Props = {
  navigation: any,
  setToken: any,
  login: any,
};

type State = {
  email: string,
  password: string,
  loading: boolean,
};

class AuthSignIn extends Component<Props, State> {
  static navigationOptions = {
    header: null,
  };

  state = {
    email: '',
    password: '',
    loading: false,
  };

  onChange(type, value) {
    this.setState({
      ...this.state,
      [type]: value,
    });
  }

  onSubmit() {
    const { email, password } = this.state;

    this.setState({ loading: true });

    AuthService
      .signIn(email, password)
      .then((res) => {
        this.props.setToken({ token: res.data.token });
        this.props.login();
        resetNavigation('Home', this.props.navigation);
      }, () => {
        // TODO Handle API errors
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    const { navigate } = this.props.navigation;
    const { email, password, loading } = this.state;

    return (
      <Container>
        <View style={styles.signInHead}>
          <Text style={styles.signInHeadTitle}>
            Activity Tracker
          </Text>

          <Text style={styles.signInHeadSubtitle}>
            Your pocket application to track everything.
          </Text>
        </View>

        <View style={styles.signInForm}>
          <InputItem
            placeholder="Email"
            value={email}
            autoCorrect={false}
            autoCapitalize="none"
            onChange={value => this.onChange('email', value)}
          />

          <InputItem
            placeholder="Password"
            value={password}
            autoCorrect={false}
            type="password"
            autoCapitalize="none"
            onChange={value => this.onChange('password', value)}
          />
        </View>

        <View style={styles.signInButton}>
          <Button
            type="primary"
            onClick={() => this.onSubmit()}
            loading={loading}
            disabled={loading}
          >
            Sign In
          </Button>
        </View>

        <View style={styles.signInButton}>
          <Button
            onClick={() => navigate('AuthSignUp')}
          >
            Create an account
          </Button>
        </View>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setToken: token => dispatch(setToken(token)),
  login: () => dispatch(login()),
});

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AuthSignIn);
