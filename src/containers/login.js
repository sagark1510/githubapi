import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Platform} from 'react-native';
import {SocialIcon} from 'react-native-elements';
import OAuthManager from 'react-native-oauth';

const {width} = Dimensions.get('window');

const configs = {
  ios: {
    client_id: '313cae832c28e42fd42e',
    client_secret: '45cb3a685a26f3ae10fe178d98f01a52b4a7324b',
  },
  android: {
    client_id: '8b74c236c1d3e2b5d6c4',
    client_secret: 'af04b55b2704a6154960b5ccacffad867a118b76',
  },
};

export default class Login extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.onLoginPress = this.onLoginPress.bind(this);
  }
  onLoginPress() {
    const manager = new OAuthManager('githubapi');
    manager.configure({
      github: configs[Platform.OS],
    });
    manager
      .authorize('github', {scopes: 'user:email read:user gist'})
      .then(resp => {
        console.log(resp);
        this.props.navigation.replace('Dashboard');
      })
      .catch(err => console.log('There was an error', err));
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{width: width - 20}}>
          <SocialIcon
            onPress={this.onLoginPress}
            title="Login with Github"
            button
            type="github"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
