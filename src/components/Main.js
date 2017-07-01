import React, { Component } from 'react';
import { Text } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import CatalogList from './CatalogList.js';

class Main extends Component {
  render() {
    return (
      <ScrollableTabView
            renderTabBar={() => <DefaultTabBar />}
            ref={(tabView) => { this.tabView = tabView; }}
      >
        <Text tabLabel='About' />
        <CatalogList tabLabel='Catalog' />
        <Text tabLabel='Events' />
      </ScrollableTabView>
    );
  }
}

export default Main;
