import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {Component, useState} from 'react';

export default HandleTextInput = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <Text style={{fontSize: 30}}>HandleTextInput</Text>
      <Text style={{fontSize: 30}}>Your name is: {name}</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your name:"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Button title="Clear" color={'red'} onPress={() => setName('')} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: 'blue',
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10,
  },
});
