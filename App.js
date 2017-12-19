/**
 * React Native
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import AppListItem from './src/components/list-item/AppListItem';

export default class App extends Component {
  state = {
    placeName: '',
    places: []
  };

  placeNameChangedHandler = (value) => {
    this.setState({
      placeName: value
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.setState((prevState) => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };

  render() {
    const placesOutput = this.state.places.map((place, index) => (
      <AppListItem key={index} place={place} />
    ));

    return (
      <View style={styles.container}>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.containerInputText}
            value={this.state.placeName}
            placeholder="An awesome place" 
            onChangeText={this.placeNameChangedHandler} />
          <Button
            title="Add"
            style={styles.containerInputButton}
            onPress={this.placeSubmitHandler} />
        </View>
        <View style={styles.listContainer}>
          { placesOutput }
        </View>
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
  containerInput: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerInputText: {
    width: '70%',
  },
  containerInputButton: {
    width: '30%',
  },
  listContainer: {
    width: '100%',
  },
});
