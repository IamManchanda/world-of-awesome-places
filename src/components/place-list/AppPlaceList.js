/**
 * React Native
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppListItem from './../list-item/AppListItem';

const AppPlaceList = (props) => {
  const placesOutput = props.places.map((place, i) => (
    <AppListItem 
      key={i} 
      placeName={place} 
      onItemPressed={() => props.onItemDeleted(i)} />
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
