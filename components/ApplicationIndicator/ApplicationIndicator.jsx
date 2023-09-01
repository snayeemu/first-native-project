import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const ApplicationIndicator = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleShowLoader = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <View style={styles.main}>
      <ActivityIndicator size={'small'} color="green" animating={isLoading} />
      {isLoading && <ActivityIndicator size={'large'} color="red" />}
      <View style={{width: '50%'}}>
        <Button title="Show Loader" onPress={handleShowLoader} />
      </View>
    </View>
  );
};

export default ApplicationIndicator;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
