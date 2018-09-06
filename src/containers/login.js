import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {SocialIcon} from 'react-native-elements';

const {width} = Dimensions.get('window');

export default class Login extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.onLoginPress = this.onLoginPress.bind(this);
  }
  onLoginPress() {
    alert('test');
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
