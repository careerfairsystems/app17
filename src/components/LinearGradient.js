import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';

class LinearGradient extends Component {

  renderGradient() {
    const gradients = [];
    if(this.props.left){
      gradients.push(<View style={styles.firtsGradient} />)
      for (let i = 0; i < 30; i++) {
        gradients.push(
        <View style={{ backgroundColor: 'rgba(255,255,255,0.' + (99 - i) + ')', flex: 1 }} />
      );
      }
    }else{
      for (let i = 0; i < 30; i++) {
        gradients.push(
        <View style={{ backgroundColor: 'rgba(255,255,255,0.' + (69 + parseInt(i, 10)) + ')', flex: 1 }} />
      );
      }
      gradients.push(<View style={styles.firtsGradient} />)
    }
    return gradients;
  }

  render() {
    return (
      <View style={styles.outer}>

        {this.renderGradient()}
      </View>
    );
  }

}

const styles = {
  outer: {
    position: 'absolute',
    height: 74,
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    flexDirection: 'row'
  },
  firtsGradient: {
    flex: 40,
    backgroundColor: 'rgba(255, 255, 255, 1)'
  }
};

export default LinearGradient;
