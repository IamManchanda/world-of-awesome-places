/**
 * React Native
 */

import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import AppListItem from './../list-item/AppListItem';

const AppPlaceList = (props) => {  
  return (
    <FlatList 
      style={styles.listContainer}
      data={props.places}
      renderItem={(info) => (
        <AppListItem 
          placeName={info.item.value} 
          onItemPressed={() => props.onItemDeleted(info.item.key)} />
      )} />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
});

export default AppPlaceList;
