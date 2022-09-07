import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setActiveUser} from '../features/UserSlice/userSlice';

export const Home = () => {
  const activeUser = useSelector(state => state.user);
  const [asyncStorageValue, setAsyncStorageValue] = useState();
  const dispatch = useDispatch();
  const getRegisteredUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('registeredUser');
      setAsyncStorageValue(jsonValue);
    } catch (e) {
      // read error
    }
  };
  useEffect(() => {
    getRegisteredUser();
    if (asyncStorageValue?.length > 0) {
      dispatch(setActiveUser(asyncStorageValue));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asyncStorageValue]);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};
