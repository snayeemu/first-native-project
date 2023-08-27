/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';
import CompanyData from './components/CompanyData/CompanyData';
import FirstFlatList from './components/FirstFlatList/FirstFlatList';
import FirstSectionList from './components/FirstSectionList/FirstSectionList';
import HandleTextInput from './components/HandleTextInput/HandleTextInput';
import ListWithMap from './components/ListWithMap/ListWithMap';
import ResponsiveFlexLayout from './components/ResponsiveFlexLayout/ResponsiveFlexLayout';
import SimpleForm from './components/SimpleForm/SimpleForm';
import TouchableHighlight from './components/MyTouchableHighlight/MyTouchableHighlight';
import UnmountEffect from './components/UnmountEffect/UnmountEffect';
import exStyles from './styles/exStyles';

const fruit = () => 'apple';

function App() {
  const name = 'Shaikh Nayeem Uddin';
  const [aNumber, setANumber] = useState(9);

  const handleOnPress = () => console.warn('function called');
  const handleIncrementByFive = () => setANumber(prev => prev + 5);
  return (
    <>
      {/* <Text style={styles.commonTextStyles}>Style in React Native</Text>
      <Text style={exStyles.commonTextStyles}>External Styles</Text>
      <Text
        style={[
          styles.commonTextStyles,
          exStyles.commonTextStyles,
          {marginTop: 40},
        ]}>
        Combined of internal and external
      </Text> */}
      {/* <HandleTextInput /> */}
      {/* <SimpleForm /> */}
      {/* <FirstFlatList /> */}
      {/* <ListWithMap /> */}
      {/* <FirstSectionList /> */}
      {/* <UnmountEffect /> */}
      {/* <ResponsiveFlexLayout /> */}
      <TouchableHighlight />
    </>
  );
}

const styles = StyleSheet.create({
  commonTextStyles: {
    fontSize: 30,
    color: 'white',
    backgroundColor: 'blue',
    height: 100,
    marginTop: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default App;
