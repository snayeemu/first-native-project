import {ScrollView, StyleSheet, Text, View} from 'react-native';
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
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Fourth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Fifth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Sixth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Seventh Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Eighth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Ninth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Tenth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Eleventh Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Twelves Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Thirteenth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Fourteenth Item',
  },
];

const ListWithMap = () => {
  return (
    <View>
      <Text style={{fontSize: 30, textAlign: 'center', marginVertical: 20}}>
        ListWithMap
      </Text>
      <ScrollView style={{marginBottom: 150}}>
        <View style={styles.flexGrid}>
          {DATA.map((item, index) => (
            <Text style={styles.listText} key={`${item.id}-${index}`}>
              {item.title}{' '}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ListWithMap;

const styles = StyleSheet.create({
  listText: {
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'blue',
    margin: 20,
    color: 'white',
    paddingVertical: 30,
    borderRadius: 10,
  },
  flexGrid: {
    marginBottom: 50,

    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
