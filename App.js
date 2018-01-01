/**
 * React Native
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import AppPlaceInput from './src/components/place-input/AppPlaceInput';
import AppPlaceList from './src/components/place-list/AppPlaceList';
import AppPlaceDetail from './src/components/place-detail/AppPlaceDetail';

class App extends Component {
  state = {
    places: [],
    selectedPlace: null,
  };

  placeAddedHandler = (placeName) => {
    this.setState((prevState) => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Delhi_Red_fort.jpg/250px-Delhi_Red_fort.jpg',
          },
        }),
      };
    });
  };

  placeDeletedHandler = () => {
    this.setState((prevState) => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null,      
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null,
    });
  };

  placeSelectedHandler = (key) => {
    this.setState((prevState) => {
      return {
        selectedPlace: prevState.places.find((place) => {
          return place.key === key;
        }),
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <AppPlaceDetail 
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler} />
        <AppPlaceInput 
          onPlaceAdded={this.placeAddedHandler} />
        <AppPlaceList 
          places={this.state.places} 
          onItemSelected={this.placeSelectedHandler} />
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
