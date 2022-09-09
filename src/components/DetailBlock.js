import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

export const DetailBlock = ({title, description}) => {
  const themeColors = useSelector(state => state.theme);
  const styles = StyleSheet.create({
    // Styles in component because we use global state data.
    detailTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      borderBottomWidth: 0.5,
      borderBottomColor: themeColors.theme.black,
      color: themeColors.theme.black,
    },
    detailDescription: {
      paddingTop: 10,
      color: themeColors.theme.black,
    },
    detailBlock: {
      paddingBottom: 10,
    },
  });
  return (
    <View style={styles.detailBlock}>
      <Text style={styles.detailTitle}>{title}</Text>
      <Text style={styles.detailDescription}>{description}</Text>
    </View>
  );
};
