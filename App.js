import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';



export default function App() {
  useEffect(()=> {
    console.log("213333333333");
    (async()=> {
      const a = await axios.get('https://mapiv4.cloudlms.top/api/Management/get-list-branch?url=kinhdoanh.cloudlms.top')
      console.log("aaaaaaaaaaa", a.data.data.domainName);
    })()
  
  }, [])
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
