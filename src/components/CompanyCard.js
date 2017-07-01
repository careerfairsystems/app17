import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class CompanyCard extends Component {
  render() {
    return (
      <View style={styles.cardStyle}>
        <Image source={this.props.companyImage} />
        <Text>{this.props.companyName}</Text>
      </View>
    );
  }
}

const styles = {
  cardStyle: {
    flexDirection: 'row',
    height: 30
  }
};

export default CompanyCard;
