/**
 * React Native
 */

import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

class AppPlaceInput extends Component {
  state = {
    placeName: ''
  };

  placeNameChangedHandler = (value) => {
    this.setState({
      placeName: value
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({
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
});

export default AppPlaceInput;
