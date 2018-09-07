import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import OAuthManager from 'react-native-oauth';
import {connect} from 'react-redux';
import {logout} from '../actions';
import setAuthToken from '../utils/setAuthToken';

class Dashboard extends Component {
  static navigationOptions = {
    title: 'Dashboard',
  };
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    const manager = new OAuthManager('githubapi');
    manager.deauthorize('github');
    setAuthToken(null);
    this.props.logout();
    this.props.navigation.replace('Login');
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title="Logout" onPress={this.logout} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default connect(
  null,
  {logout},
)(Dashboard);
