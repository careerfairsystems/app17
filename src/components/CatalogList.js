import axios from 'axios';
import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import Spinner from 'react-native-spinkit';
import RightCompanyCard from './RightCompanyCard';
import LeftCompanyCard from './LeftCompanyCard';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

class CatalogList extends Component {
  state = { dataSource: ds.cloneWithRows(['hej']), spinner: true }

  componentWillMount() {
    axios.get('https://api.jexpo.se/exhibitors?namespace=arkad&limit=0&sort=name')
    .then(response => this.setState({ dataSource: ds.cloneWithRows(response.data) }));
  }
renderRow = (company) => {
  console.log(company);
  if (company === 'hej') {
    return (<View style={styles.spinnerView}>
        <Spinner
          key={0}
          isVisible={this.state.spinner}
          size={80}
          type={'9CubeGrid'}
          color={'#F05F40'}
          />
          </View>);
  }

  return (
    <LeftCompanyCard
      companyName={company.name}
      companyImage={company.profile.logotype.thumbnails.large.url}
      companyColor={company.profile.colors[0]}
    />
  );
}


render() {
  return (
    <ListView
    dataSource={this.state.dataSource}
    renderRow={this.renderRow}
    />
  );
}
}

const styles = {
  spinnerView: {
    height: 400,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

};


export default CatalogList;
