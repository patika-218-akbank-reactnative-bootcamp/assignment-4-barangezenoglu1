import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {MoviesList} from '../components/MoviesList';
import {Tab} from '../components/Tab';
import {setActiveUser} from '../features/UserSlice/userSlice';
import {useGetsyncStorageValue} from '../hooks/getAsyncStorageValue';
export const Home = ({navigation}) => {
  const themeColors = useSelector(state => state.theme);
  console.log('theme colors', themeColors);
  const asyncStorageValue = useGetsyncStorageValue('registeredUser');
  const dispatch = useDispatch();
  const [tabs] = useState(['Top Rated', 'Popular', 'Upcoming']);
  const [selectedTab, setSelectedTab] = useState('Top Rated');

  const handlePressTab = tab => {
    setSelectedTab(tab);
  };
  const displayTabContent = tab => {
    // With this function we display content depends to selected tab.
    switch (tab) {
      case 'Top Rated':
        return (
          <MoviesList
            title={'Top Rated'}
            movieFilter={'top_rated'}
            navigation={navigation}
          />
        );
      case 'Popular':
        return (
          <MoviesList
            title={'Popular'}
            movieFilter={'popular'}
            navigation={navigation}
          />
        );
      case 'Upcoming':
        return (
          <MoviesList
            title={'Upcoming'}
            movieFilter={'upcoming'}
            navigation={navigation}
          />
        );
    }
  };

  useEffect(() => {
    if (asyncStorageValue?.length > 0) {
      dispatch(setActiveUser(asyncStorageValue));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asyncStorageValue]);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeColors.theme.white,
    },
    tabContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      backgroundColor: 'rgba(55, 54, 54, 0.8)',
    },
    tabs: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      paddingRight: 45,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabContainer}>
        {tabs.map((tab, index) => {
          return (
            <View key={index} style={styles.tabs}>
              <Tab
                title={tab}
                isActive={selectedTab === tab}
                onPress={handlePressTab}
              />
            </View>
          );
        })}
      </View>
      {displayTabContent(selectedTab)}
    </SafeAreaView>
  );
};
