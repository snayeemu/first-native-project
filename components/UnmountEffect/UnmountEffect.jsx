import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const UnmountEffect = () => {
  const [show, setShow] = useState(true);
  return (
    <View>
      <Text style={{fontSize: 30}}>useEffect for unmount Component</Text>
      <Button onPress={() => setShow(prev => !prev)} title="Toggle" />
      {show && <Student />}
    </View>
  );
};

const Student = () => {
  const time = setInterval(() => {
    console.warn('Timer called');
  }, 2000);

  useEffect(() => {
    return () => {
      clearInterval(time);
    };
  });

  return (
    <View>
      <Text style={styles.studentText}>Student</Text>
    </View>
  );
};

export default UnmountEffect;

const styles = StyleSheet.create({
  studentText: {
    color: 'red',
    fontSize: 30,
  },
});
