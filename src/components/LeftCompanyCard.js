import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import LinearGradient from './LinearGradient';

class LeftCompanyCard extends Component {
  render() {
    const { companyName, companyImage, companyColor } = this.props;

    return (
      <View style={[styles.cardStyle, { backgroundColor: 'rgb(' + companyColor[0] + ',' + companyColor[1] + ',' + companyColor[2] + ')' }]}>
        <LinearGradient left />
          <Image style={styles.imageStyle} source={{uri: companyImage}} />
          <Text style={styles.textStyle}>{companyName}</Text>
      </View>
    );
  }
}

const styles = {
  cardStyle: {
    height: 75,
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    backgroundColor: 'blue'
  },
  textStyle: {
    alignSelf: 'center'
  },
  imageStyle: {
    margin: 7,
    width: 70,
    resizeMode: 'contain'
  }
};

export default LeftCompanyCard;
