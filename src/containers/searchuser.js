import React, {Component} from 'react';
import {View, TextInput, StyleSheet, FlatList} from 'react-native';
import {List, ListItem, Avatar} from 'react-native-elements';
import {connect} from 'react-redux';
import {style} from '../assets/theme';
import {searchUser} from '../actions';

class SearchUser extends Component {
  static navigationOptions = {
    title: 'Search User',
  };
  constructor(props) {
    super(props);
    this.onTermChange = this.onTermChange.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }
  onTermChange(q) {
    this.props.searchUser({q});
  }
  renderRow({item}) {
    return (
      <ListItem
        avatar={
          <Avatar
            rounded
            source={item.avatar_url && {uri: item.avatar_url}}
            title={item.login}
          />
        }
        title={item.login}
        subtitle={item.html_url}
        onPress={() =>
          this.props.navigation.navigate('UserDetail', {user: item})
        }
      />
    );
  }
  render() {
    const {
      searchUsers: {items},
      term,
    } = this.props;
    return (
      <View style={style.container}>
        <View>
          <TextInput
            placeholder="Enter username"
            onChangeText={this.onTermChange}
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={term}
          />
        </View>
        <List containerStyle={{marginTop: 0}}>
          <FlatList
            data={items}
            renderItem={this.renderRow}
            keyExtractor={item => item.id}
          />
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    ...style.pl,
    fontSize: 16,
  },
});

const mapStatesToProps = ({user}) => ({
  searchUsers: user.searchUsers,
  term: user.term,
});

export default connect(
  mapStatesToProps,
  {searchUser},
)(SearchUser);
