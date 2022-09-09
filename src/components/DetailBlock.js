import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const DetailBlock = ({title, description}) => {
  return (
    <View style={styles.detailBlock}>
      <Text style={styles.detailTitle}>{title}</Text>
      <Text style={styles.detailDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
    color: 'black',
  },
  detailDescription: {
    paddingTop: 10,
    color: 'black',
  },
  detailBlock: {
    paddingBottom: 10,
  },
});
