import React, { Component } from 'react';
import { login, logout } from '../../reducers/auth';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { WingBlank, WhiteSpace, Button } from 'antd-mobile';

class Auth extends Component {
  static navigationOptions = {
    title: 'Logowanie',
  };

  render() {
    return (
      <WingBlank>
        <WhiteSpace size="lg" />

        {this.props.logged && (
          <View>
            <Text>Zalogowany</Text>
            <WhiteSpace size="lg" />
            <Button onClick={() => this.props.logout()}>Wyloguj</Button>
          </View>
        )}

        {!this.props.logged && (
          <View>
            <Text>Niezalogowany</Text>
            <WhiteSpace size="lg" />
            <Button onClick={() => this.props.login()}>Zaloguj</Button>
          </View>
        )}
      </WingBlank>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login()),
  logout: () => dispatch(logout()),
});

const mapStateToProps = state => ({
  logged: state.auth.logged,
});


export default connect(mapStateToProps, mapDispatchToProps)(Auth);
