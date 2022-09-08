import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export const Tab = ({title, isActive, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(title)}>
      <Text
        style={[
          styles.touchableTabs,
          isActive
            ? // eslint-disable-next-line react-native/no-inline-styles
              {
                borderBottomWidth: 4,
                borderBottomColor: '#FFFF',
                fontWeight: '800',
              }
            : null,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableTabs: {
    paddingBottom: 5,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFFF',
  },
});
