import {SectionList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FirstSectionList = () => {
  const users = [
    {
      id: 1,
      name: 'Nayeem',
      data: ['PHP', 'React Js', 'Angular'],
    },
    {
      id: 2,
      name: 'Peter',
      data: ['Java', 'Js', 'HTML'],
    },
    {
      id: 3,
      name: 'Galib',
      data: ['C', 'C++', 'Python'],
    },
    {
      id: 4,
      name: 'Tony',
      data: ['CSS', 'Bootstrap', 'TailWind'],
    },
  ];

  return (
    <View>
      <Text>FirstSectionList</Text>

      <SectionList
        sections={users}
        renderSectionHeader={({section: {name}}) => (
          <Text style={{fontSize: 25, color: 'red', marginTop: 20}}>
            {name}
          </Text>
        )}
        renderItem={({item}) => (
          <Text style={{fontSize: 20, marginLeft: 20}}>{item}</Text>
        )}
      />
    </View>
  );
};

export default FirstSectionList;

const styles = StyleSheet.create({});
