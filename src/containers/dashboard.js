import React, {Component} from 'react';
import OAuthManager from 'react-native-oauth';
import {connect} from 'react-redux';
import {Button} from 'react-native-elements';
import {logout, fetchCurrentUser} from '../actions';
import setAuthToken from '../utils/setAuthToken';
import Profile from './partials/profile';
import Loader from './partials/loader';

class Dashboard extends Component {
  static navigationOptions = {
    title: 'Dashboard',
  };
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    this.props.fetchCurrentUser();
  }
  logout() {
    const manager = new OAuthManager('githubapi');
    manager.deauthorize('github');
    setAuthToken(null);
    this.props.logout();
    this.props.navigation.replace('Login');
  }
  render() {
    const {fetching, user: currentUser} = this.props.user;
    if (fetching) {
      return <Loader />;
    }
    return (
      <Profile navigation={this.props.navigation} user={currentUser}>
        <Button
          backgroundColor="#ff5723"
          title="Search Github Users"
          raised
          icon={{name: 'search'}}
          onPress={() => this.props.navigation.navigate('SearchUser')}
        />
        <Button
          backgroundColor="transparent"
          color="black"
          title="Logout"
          onPress={this.logout}
        />
      </Profile>
    );
  }
}

const mapStatesToProps = ({user}) => ({user});

export default connect(
  mapStatesToProps,
  {logout, fetchCurrentUser},
)(Dashboard);
