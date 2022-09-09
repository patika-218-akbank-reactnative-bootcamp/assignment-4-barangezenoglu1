import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Switch, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfilePhoto from '../assets/baranProfilePhoto.png';
import {CustomButton} from '../components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setActiveUser} from '../features/UserSlice/userSlice';
import {setTheme} from '../features/ThemeSlice/themeSlice';
import {darkTheme, lightTheme} from '../data/theme';
export const Profile = ({navigation}) => {
  const activeUser = useSelector(state => state.user);
  const themeColors = useSelector(state => state.theme);
  const dispatch = useDispatch();

  console.log('activeUser', activeUser);
  const [editedUser, setEditedUser] = useState({
    userEmail: '',
    userName: '',
    userPassword: '',
  });
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const setUserAsyncStorage = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('registeredUser', jsonValue);
    } catch (e) {
      // save error
    }
  };
  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('registeredUser');
    } catch (e) {
      // remove error
    }
  };
  const handleConfirm = () => {
    setUserAsyncStorage(editedUser);
    dispatch(setActiveUser(editedUser));
  };
  const handleLogout = () => {
    removeValue();
    navigation.navigate('Welcome');
  };
  useEffect(() => {
    if (isEnabled) {
      dispatch(setTheme(darkTheme));
    } else {
      dispatch(setTheme(lightTheme));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEnabled]);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeColors.theme.white,
    },
    darkModeContainer: {
      paddingTop: 20,
      paddingLeft: 20,
      flexDirection: 'row',
    },
    settingsContainer: {
      alignItems: 'center',
    },
    profilePhoto: {
      height: 120,
      width: 120,
      borderRadius: 60,
      marginBottom: 30,
    },
    textInput: {
      backgroundColor: 'rgba(216, 211, 211, 0.2)',
      height: 40,
      width: '50%',
      borderWidth: 1,
      borderRadius: 10,
      alignItems: 'center',
      paddingLeft: 10,
      marginBottom: 15,
    },
    logoutButtonContainer: {
      marginTop: 20,
      height: 50,
      width: 150,
      backgroundColor: 'rgba(251, 0, 0  , 0.8)',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    },
    buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: themeColors.theme.white,
    },
    confirmButtonContainer: {
      marginTop: 20,
      height: 50,
      width: 150,
      backgroundColor: themeColors.theme.black,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.darkModeContainer}>
        <MaterialCommunityIcons
          name="theme-light-dark"
          size={30}
          color={themeColors.theme.black}
        />
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.settingsContainer}>
        <Image source={ProfilePhoto} style={styles.profilePhoto} />
        <TextInput
          style={styles.textInput}
          placeholder="Change your email"
          placeholderTextColor={'grey'}
          value={editedUser.userEmail}
          onChangeText={text => setEditedUser({...editedUser, userEmail: text})}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Change your name"
          placeholderTextColor={'grey'}
          value={editedUser.userName}
          onChangeText={text => setEditedUser({...editedUser, userName: text})}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Change your password"
          placeholderTextColor={'grey'}
          value={editedUser.userPassword}
          onChangeText={text =>
            setEditedUser({...editedUser, userPassword: text})
          }
        />
        <CustomButton
          title={'Confirm & Edit'}
          buttonContainerStyle={styles.confirmButtonContainer}
          buttonTextStyle={styles.buttonText}
          onPress={handleConfirm}
        />
        <CustomButton
          title={'Logout'}
          buttonContainerStyle={styles.logoutButtonContainer}
          buttonTextStyle={styles.buttonText}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
};
