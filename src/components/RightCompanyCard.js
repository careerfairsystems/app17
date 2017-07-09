import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import LinearGradient from './LinearGradient';

class RightCompanyCard extends Component {
  render() {
    const { companyName, companyImage, companyColor } = this.props;

    return (
      <View style={[styles.cardStyle, { backgroundColor: 'rgb(' + companyColor[0] + ',' + companyColor[1] + ',' + companyColor[2] + ')' }]}>
        <LinearGradient left={false} />
        <Text style={styles.textStyle}>{companyName}</Text>
        <Image style={styles.imageStyle} source={{uri: companyImage}} />
      </View>
    );
  }
}

const styles = {
  textStyle: {
    alignSelf: 'center'
  },
  cardStyle: {
    height: 75,
    flex: 1,
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderColor: '#000',
    flexDirection: 'row',
    backgroundColor: 'blue'
  },
  imageStyle: {
    margin: 7,
    width: 70,
    resizeMode: 'contain'
  }
};

export default RightCompanyCard;
