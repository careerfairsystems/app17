import axios from 'axios';
import React, { Component } from 'react';
import { ScrollView, Alert} from 'react-native';
import CompanyCard from './CompanyCard';

class CatalogList extends Component {
  state = { companys: [] }

  componentWillMount(){
    axios.get('https://api.jexpo.se/exhibitors?namespace=arkad&limit=0&sort=name')
      .then(response => this.setState({ companys: response.data }))
  }

  getCompanys() {

        const cards = [];
        for (var i = 0; i < this.state.companys.length; i++) {
          cards.push(<CompanyCard
                        companyName={this.state.companys[i].name}
                    />)
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
