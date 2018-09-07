import React, {Component} from 'react';
import {View, StyleSheet, ActivityIndicator, ScrollView} from 'react-native';
import {Button, Avatar, Text, Card, ListItem} from 'react-native-elements';
import OAuthManager from 'react-native-oauth';
import {connect} from 'react-redux';
import moment from 'moment';
import {logout, fetchCurrentUser} from '../actions';
import setAuthToken from '../utils/setAuthToken';
import {style} from '../assets/theme';

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
      return (
        <View style={[style.container, style.center]}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={[style.container, style.pl]}>
        <ScrollView>
          <View style={[style.center]}>
            <Avatar large rounded source={{uri: currentUser.avatar_url}} />
            <Text>{currentUser.name}</Text>
            <Text style={style.mtl}>{currentUser.bio}</Text>
          </View>
          <Card containerStyle={[style.mbl, {padding: 0}]}>
            <ListItem
              hideChevron
              leftIcon={{name: 'md-mail', type: 'ionicon'}}
              title={currentUser.email}
            />
            <ListItem
              hideChevron
              leftIcon={{name: 'md-briefcase', type: 'ionicon'}}
              title={currentUser.company}
            />
            <ListItem
              hideChevron
              leftIcon={{name: 'md-calendar', type: 'ionicon'}}
              title={
                moment(currentUser.created_at).format('DD, MMMM YYYY') +
                ' Joined'
              }
            />
            <ListItem
              hideChevron
              leftIcon={{name: 'md-analytics', type: 'ionicon'}}
              title={`${currentUser.public_repos} public repositories`}
            />
            <ListItem
              hideChevron
              leftIcon={{name: 'md-aperture', type: 'ionicon'}}
              title={`${currentUser.followers} followers`}
            />
            <ListItem
              hideChevron
              leftIcon={{name: 'md-attach', type: 'ionicon'}}
              title={`${currentUser.following} following`}
            />
          </Card>
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
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

const mapStatesToProps = ({user}) => ({user});

export default connect(
  mapStatesToProps,
  {logout, fetchCurrentUser},
)(Dashboard);
