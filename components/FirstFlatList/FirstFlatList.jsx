import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const FirstFlatList = () => {
  return (
    <View>
      <Text style={{fontSize: 30, textAlign: 'center', marginVertical: 20}}>
        FirstFlatList
      </Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Text style={styles.listText}>{item.title}</Text>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default FirstFlatList;

const styles = StyleSheet.create({
  listText: {
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'blue',
    margin: 5,
    color: 'white',
    paddingVertical: 5,
    borderRadius: 10,
  },
});
