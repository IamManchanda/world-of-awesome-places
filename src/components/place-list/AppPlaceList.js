/**
 * React Native
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppListItem from './../list-item/AppListItem';

const AppPlaceList = (props) => {
  const placesOutput = props.places.map((place, index) => (
    <AppListItem key={index} placeName={place} />
  ));
  
  return (
    <View style={styles.listContainer}>
      { placesOutput }
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
});

export default AppPlaceList;
