import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class CompanyCard extends Component {
  render() {
    return (
      <View style={styles.cardStyle}>
        <Image style={styles.imageStyle} source={{uri: this.props.companyImage}} />
        <Text style={styles.textStyle}>{this.props.companyName}</Text>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    alignSelf: 'center'
  },
  cardStyle: {
    flexDirection: 'row',
    height: 50,

  },
  imageStyle: {
    margin: 7,
    width: 70,
    resizeMode: 'contain'
  }
};

export default CompanyCard;
