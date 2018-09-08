import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import moment from 'moment';
import {Avatar, Text, Card, ListItem} from 'react-native-elements';
import {style} from '../../assets/theme';

export default class profile extends Component {
  render() {
    const {user, children} = this.props;
    return (
      <View style={[style.container, style.pl]}>
        <ScrollView>
          <View style={[style.center]}>
            <Avatar large rounded source={{uri: user.avatar_url}} />
            <Text style={style.mts}>{user.name}</Text>
            <Text style={style.mtl}>{user.bio}</Text>
          </View>
          <Card containerStyle={[style.mbl, {padding: 0}]}>
            {user.email ? (
              <ListItem
                hideChevron
                leftIcon={{name: 'md-mail', type: 'ionicon'}}
                title={user.email}
              />
            ) : null}
            {user.company ? (
              <ListItem
                hideChevron
                leftIcon={{name: 'md-briefcase', type: 'ionicon'}}
                title={user.company}
              />
            ) : null}
            <ListItem
              hideChevron
              leftIcon={{name: 'md-calendar', type: 'ionicon'}}
              title={
                moment(user.created_at).format('DD, MMMM YYYY') + ' Joined'
              }
            />
            <ListItem
              leftIcon={{name: 'md-analytics', type: 'ionicon'}}
              title={`${user.public_repos} public repositories`}
              onPress={() => this.props.navigation.push('Repositories', user)}
            />
            <ListItem
              leftIcon={{name: 'md-aperture', type: 'ionicon'}}
              title={`${user.followers} followers`}
              onPress={() =>
                this.props.navigation.push('UserList', {
                  url: user.followers_url,
                  title: 'Followers',
                })
              }
            />
            <ListItem
              leftIcon={{name: 'md-attach', type: 'ionicon'}}
              title={`${user.following} following`}
              onPress={() =>
                this.props.navigation.push('UserList', {
                  url: user.following_url.replace('{/other_user}', ''),
                  title: 'Followings',
                })
              }
            />
          </Card>
          {children}
        </ScrollView>
      </View>
    );
  }
}
