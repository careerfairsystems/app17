import axios from 'axios';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import CompanyCard from './CompanyCard';

class CatalogList extends Component {
  state = { companys: [] }

  componentWillMount(){
    axios.get('https://api.jexpo.se/exhibitors?namespace=arkad&limit=0&sort=name')
      .then(response => this.setState({ companys: response.data }))
  }

  getCompanys() {

        const cards = [];
        if(this.state.companys.length >0){
          console.log(this.state.companys[0].profile.logotype.url);
          for (var i = 0; i < this.state.companys.length; i++) {
            cards.push(<CompanyCard
                          companyName={this.state.companys[i].name}
                          companyImage={this.state.companys[i].profile.logotype.thumbnails.large.url}
                      />)
          }
        }


        return cards;
      }


  render() {
    return (
      <ScrollView>
        {this.getCompanys()}
      </ScrollView>
    );
  }
}

export default CatalogList;
