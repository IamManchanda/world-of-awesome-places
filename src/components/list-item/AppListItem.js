/**
 * React Native
 */

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const AppListItem = (props) => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image 
        resizeMode="cover"
        source={props.placeImage} 
        style={styles.placeImage} />
      <Text>
        {props.placeName}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    margin: 5,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30,
  }
});

export default AppListItem;