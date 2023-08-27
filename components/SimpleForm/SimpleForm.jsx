import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const SimpleForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisplay, setIsDisplay] = useState(false);

  const handleClear = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <View>
      <Text style={{fontSize: 30}}>SimpleForm in React Native</Text>
      <TextInput
        onChangeText={text => setName(text)}
        style={styles.textInput}
        placeholder="Enter user name: "
        value={name}
      />
      <TextInput
        onChangeText={text => setPassword(text)}
        style={styles.textInput}
        secureTextEntry={true}
        placeholder="Enter user password: "
        value={password}
      />
      <TextInput
        onChangeText={text => setEmail(text)}
        style={styles.textInput}
        placeholder="Enter user email: "
        value={email}
      />

      <View style={{marginBottom: 10}}>
        <Button
          onPress={() => setIsDisplay(prev => !prev)}
          color={'green'}
          title={`${isDisplay ? 'Hide' : 'View'} Details`}
        />
      </View>
      <Button onPress={handleClear} color={'red'} title="Clear Details" />
      <View>
        {isDisplay && (
          <View style={{borderWidth: 2, borderColor: 'green', marginTop: 15}}>
            <Text style={{fontSize: 20, marginTop: 10}}>
              User Name is: {name || 'unknown'}
            </Text>
            <Text style={{fontSize: 20, marginTop: 10}}>
              Password is: {password || 'unknown'}
            </Text>
            <Text style={{fontSize: 20, marginTop: 10}}>
              User Email is: {email || 'unknown'}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default SimpleForm;

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    margin: 10,
    borderWidth: 2,
    borderColor: 'blue',
    color: 'blue',
  },
});
