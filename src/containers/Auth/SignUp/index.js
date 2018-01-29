import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { InputItem, Button, Modal } from 'antd-mobile';
import AuthService from '../../../services/auth-service';
import { Container } from '../../../components';
import styles from './styles';

type Props = {
  navigation: any,
};

type State = {
  email: string,
  password: string,
  loading: boolean,
  modal: boolean,
};

class AuthSignUp extends Component<Props, State> {
  static navigationOptions = {
    header: null,
  };

  state = {
    email: '',
    password: '',
    loading: false,
    modal: false,
  };

  onChange(type, value) {
    this.setState({
      ...this.state,
      [type]: value,
    });
  }

  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }

  onSubmit() {
    const { email, password } = this.state;

    this.setState({ loading: true });

    AuthService
      .signUp(email, password)
      .then(() => {
        this.setState({ modal: true });
      }, () => {
        // TODO Handle API errors
        this.setState({ modal: true });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    const { goBack } = this.props.navigation;
    const { email, password, loading } = this.state;

    return (
      <Container>
        <View style={styles.signInHead}>
          <Text style={styles.signInHeadTitle}>
            Create an account
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
            Create
          </Button>
        </View>

        <View style={styles.signInButton}>
          <Button
            onClick={() => goBack()}
          >
            Back to login
          </Button>
        </View>

        <Modal
          visible={this.state.modal}
          transparent
          maskClosable={false}
          onClose={this.onClose('modal')}
          title="Account created"
          footer={[{ text: 'Ok', onPress: () => { goBack(); this.onClose('modal'); } }]}
        >
          <View>
            <Text>Your account has been created. You can sign in now.</Text>
          </View>
        </Modal>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({});
const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AuthSignUp);
