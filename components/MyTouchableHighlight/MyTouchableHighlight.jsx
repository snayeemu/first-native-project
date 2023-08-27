import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';

const MyTouchableHighlight = () => {
  return (
    <View style={styles.main}>
      <Text style={{fontSize: 30}}>MyTouchableHighlight</Text>

      <TouchableHighlight>
        <Text style={[styles.button1, styles.success]}>Success</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={[styles.button1, styles.primary]}>Primary</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={[styles.button1, styles.warning]}>Warning</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={[styles.button1, styles.danger]}>Danger</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={styles.button1}>Button</Text>
      </TouchableHighlight>
    </View>
  );
};

export default MyTouchableHighlight;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  button1: {
    backgroundColor: '#bbb',
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 10,
    shadowOpacity: 1,
  },

  success: {
    backgroundColor: 'rgb(21 128 61)',
  },

  primary: {
    backgroundColor: 'rgb(6 182 212)',
  },

  warning: {
    backgroundColor: 'rgb(234 179 8)',
  },

  danger: {
    backgroundColor: 'rgb(185 28 28)',
  },
});
