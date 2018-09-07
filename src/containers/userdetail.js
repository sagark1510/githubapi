import React, {Component} from 'react';
import {fetchFromUrl} from '../api/user';
import Profile from './partials/profile';
import Loader from './partials/loader';

export default class UserDetail extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.user.login.toUpperCase(),
  });
  state = {user: null, loading: true};
  async componentDidMount() {
    const {user: param} = this.props.navigation.state.params;
    const user = await fetchFromUrl(param.url);
    this.setState({user, loading: false});
  }
  render() {
    const {user, loading} = this.state;
    if (loading) {
      return <Loader />;
    }
    return <Profile navigation={this.props.navigation} user={user} />;
  }
}
