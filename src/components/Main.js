import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

class Main extends Component {
  render() {
    return (
      <ScrollableTabView>
        <ReactPage tabLabel="About" />
        <FlowPage tabLabel="Calendar" />
        <JestPage tabLabel="Events" />
      </ScrollableTabView>
    )
  }
}

export default Main;
