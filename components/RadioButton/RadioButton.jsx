import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const RadioButton = () => {
  const skills = [
    {
      id: 1,
      name: 'JAVA',
    },
    {
      id: 2,
      name: 'PHP',
    },
    {
      id: 3,
      name: 'Node',
    },
    {
      id: 4,
      name: 'SQL',
    },
  ];

  const [selectedRadio, setSelectedRadio] = useState(0);

  return (
    <View style={styles.main}>
      <View>
        {skills.map((skill, index) => (
          <TouchableOpacity
            onPress={() => setSelectedRadio(index)}
            key={skill.id}>
            <View style={styles.radioContainer}>
              <View style={styles.radio}>
                {selectedRadio === index && (
                  <View style={styles.radioBg}></View>
                )}
              </View>
              <Text style={styles.radioText}>{skill.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioText: {
    fontSize: 20,
  },
  radio: {
    height: 40,
    width: 40,
    borderBlockColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  radioBg: {
    height: 28,
    width: 28,
    backgroundColor: 'black',
    borderRadius: 20,
  },
});
