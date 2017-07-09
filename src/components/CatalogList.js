import axios from 'axios';
import React, { Component } from 'react';
import { ScrollView, ListView, Text } from 'react-native';
import RightCompanyCard from './RightCompanyCard';
import LeftCompanyCard from './LeftCompanyCard';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

class CatalogList extends Component {
  state = { dataSource: ds.cloneWithRows(['hej']) }

  componentWillMount() {
    axios.get('https://api.jexpo.se/exhibitors?namespace=arkad&limit=0&sort=name')
    .then(response => this.setState({ dataSource: ds.cloneWithRows(response.data) }));
  }
  /*
  getCompanys() {
  const cards = [];
  if(this.state.companys.length >0){
  console.log(this.state.companys[0].profile.logotype.url);
  for (var i = 0; i < this.state.companys.length; i++) {
  if (i%2 == 0){
  cards.push(
  <LeftCompanyCard
  companyName={this.state.companys[i].name}
  companyImage={this.state.companys[i].profile.logotype.thumbnails.large.url}
  companyColor={this.state.companys[i].profile.colors[0]}
  />)
} else {
cards.push(
<RightCompanyCard
companyName={this.state.companys[i].name}
companyImage={this.state.companys[i].profile.logotype.thumbnails.large.url}
companyColor={this.state.companys[i].profile.colors[0]}
/>);
}
}
}


return cards;
}*/

renderRow(company) {
  console.log(company);
  if(company==='hej'){
    return <Text>as</Text>
  }else{
  return (
    <LeftCompanyCard
    companyName={company.name}
    companyImage={company.profile.logotype.thumbnails.large.url}
    companyColor={company.profile.colors[0]}
    />
  );
  }
}

render() {
  return (
    <ListView
    dataSource={this.state.dataSource}
    renderRow={this.renderRow}
    />
    /*<ScrollView style={styles.background}>
    {this.getCompanys()}
    </ScrollView>*/
  );
}
}

const styles = {
  background: {

  }
};


export default CatalogList;
