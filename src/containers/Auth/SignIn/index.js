import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { InputItem, Button } from 'antd-mobile';
import AuthService from '../../../services/auth-service';
import { Container } from '../../../components';
import { resetNavigation } from '../../../lib/navigation';
import styles from './styles';

type Props = {
  navigation: any,
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
    const { navigate } = this.props.navigation;
    const { email, password } = this.state;

    this.setState({ loading: true });

    AuthService
      .signIn(email, password)
      .then(() => {
        // this.props.login();
        resetNavigation('Home', this.props.navigation);
      }, () => {
        // TODO Handle API errors
        // this.props.login();
        resetNavigation('Home', this.props.navigation);
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
            secureTextEntry
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
  login: () => dispatch(login()),
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AuthSignIn);
