/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
const App = () => {
  const [data, setData] = useState();
  const axios = require('axios');
  console.log('data', data);
  useEffect(() => {
    axios.get('http://10.0.2.2:3000/test').then(response => {
      setData(response.data);
    });
/*     axios.post('http://10.0.2.2:3000/test', {
      id: 2,
      name: 'Senem',
      surname: 'Sanal',
      email: 'senemsanal@hotmail.com',
    }); */
  }, []);
  return (
    <View>
      <Text>Baran</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
