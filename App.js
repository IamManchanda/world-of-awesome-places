/**
 * React Native
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends Component {
  state = {
    placeName: '',
  };

  placeNameChangedHandler = (value) => {
    this.setState({
      placeName: value
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.contInput}
          value={this.state.placeName}
          placeholder="An awesome place" 
          onChangeText={this.placeNameChangedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  contInput: {
    width: 300,
  },
});
