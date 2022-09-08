import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {MoviesList} from '../components/MoviesList';
import {Tab} from '../components/Tab';
import {setActiveUser} from '../features/UserSlice/userSlice';
import {useGetsyncStorageValue} from '../hooks/getAsyncStorageValue';

export const Home = () => {
  const asyncStorageValue = useGetsyncStorageValue('registeredUser');
  console.log('Baran', asyncStorageValue);
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
        return <MoviesList title={'Top Rated'} tabType={'top_rated'} />;
      case 'Popular':
        return <MoviesList title={'Popular'} tabType={'popular'} />;
      case 'Upcoming':
        return <MoviesList title={'Upcoming'} tabType={'upcoming'} />;
    }
  };

  useEffect(() => {
    if (asyncStorageValue?.length > 0) {
      dispatch(setActiveUser(asyncStorageValue));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asyncStorageValue]);
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingRight: 70,
    padding: 10,
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    marginRight: 5,
    fontSize: 26,
    color: '#FFFF',
  },
});
