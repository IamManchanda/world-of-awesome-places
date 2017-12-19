/**
 * React Native
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AppListItem = (props) => (
  <View style={styles.listItem}>
    <Text>
      {props.place}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    margin: 5,
    backgroundColor: '#eee',
  }
});

export default AppListItem;