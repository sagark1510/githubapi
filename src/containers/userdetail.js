import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Text} from 'react-native-elements';
import {fetchSingleUser} from '../api/user';
import {style} from '../assets/theme';
import Profile from './partials/profile';

export default class UserDetail extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.user.login,
  });
  state = {user: null, loading: true};
  async componentDidMount() {
    const {user: param} = this.props.navigation.state.params;
    const user = await fetchSingleUser(param.url);
    console.log(user);
    this.setState({user, loading: false});
  }
  render() {
    const {user, loading} = this.state;
    if (loading) {
      return (
        <View style={[style.container, style.center]}>
          <ActivityIndicator />
        </View>
      );
    }
    return <Profile user={user} />;
  }
}
