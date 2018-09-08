import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {List, ListItem, Text} from 'react-native-elements';
import {style} from '../assets/theme';
import {fetchFromUrl} from '../api/user';
import Loader from './partials/loader';

class Repositories extends Component {
  static navigationOptions = {
    title: 'Repositories',
  };
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      loading: true,
    };
    this.renderRow = this.renderRow.bind(this);
    this.loadNextPage = this.loadNextPage.bind(this);
  }
  async loadList() {
    const {repos_url: url} = this.props.navigation.state.params;
    this.page++;
    const repos = await fetchFromUrl(`${url}?page=${this.page}`);
    this.setState({repos: [...this.state.repos, ...repos], loading: false});
  }
  async componentDidMount() {
    this.page = 0;
    this.loadList();
  }

  loadNextPage() {
    const {public_repos: total} = this.props.navigation.state.params;
    if (this.state.repos.length >= total) return;
    this.loadList();
  }

  renderRow({item}) {
    return (
      <ListItem
        title={item.name}
        titleStyle={{
          fontSize: 20,
          color: 'black',
          fontWeight: 'bold',
          marginBottom: 5,
        }}
        subtitleContainerStyle={style.plm}
        subtitle={
          <View style={[style.row, style.spaceBetween]}>
            <Text>Watchers: {item.watchers_count}</Text>
            <Text>Stars: {item.stargazers_count}</Text>
            <Text>Issues: {item.open_issues_count}</Text>
          </View>
        }
        hideChevron
      />
    );
  }
  render() {
    const {repos, loading} = this.state;
    if (loading) return <Loader />;
    return (
      <View style={style.container}>
        <List containerStyle={{marginTop: 0}}>
          <FlatList
            data={repos}
            renderItem={this.renderRow}
            keyExtractor={item => `${item.id}`}
            onEndReachedThreshold={0.1}
            onEndReached={this.loadNextPage}
          />
        </List>
      </View>
    );
  }
}

export default Repositories;
