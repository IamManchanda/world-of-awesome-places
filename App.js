/**
 * React Native
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import AppPlaceInput from './src/components/place-input/AppPlaceInput';
import AppPlaceList from './src/components/place-list/AppPlaceList';

class App extends Component {
  state = {
    places: []
  };

  placeAddedHandler = (placeName) => {
    this.setState((prevState) => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          value: placeName,
        }),
      };
    });
  };

  placeDeltedHandler = (key) => {
    this.setState((prevState) => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== key;
        }),
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <AppPlaceInput 
          onPlaceAdded={this.placeAddedHandler} />
        <AppPlaceList 
          places={this.state.places} 
          onItemDeleted={this.placeDeltedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default App;
