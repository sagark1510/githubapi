import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {List, ListItem, Avatar} from 'react-native-elements';
import {style} from '../assets/theme';
import {fetchFromUrl} from '../api/user';
import Loader from './partials/loader';

class Repositories extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.title,
  });
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loading: true,
    };
    this.renderRow = this.renderRow.bind(this);
  }
  async componentDidMount() {
    const {url} = this.props.navigation.state.params;
    const list = await fetchFromUrl(url);
    this.setState({list, loading: false});
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
        onPress={() => this.props.navigation.push('UserDetail', {user: item})}
      />
    );
  }
  render() {
    const {list, loading} = this.state;
    if (loading) return <Loader />;
    return (
      <View style={style.container}>
        <List containerStyle={{marginTop: 0}}>
          <FlatList
            data={list}
            renderItem={this.renderRow}
            keyExtractor={item => `${item.id}`}
          />
        </List>
      </View>
    );
  }
}

export default Repositories;
