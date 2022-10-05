import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { SwipeButton } from '../../src/index';

function Home(): JSX.Element {
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', backgroundColor: 'gray' }}
    >
      <SwipeButton
        Icon={<Text style={{ color: 'white' }}>X</Text>}
        onComplete={() => Alert.alert('Completed')}
        title="Swipe to complete"
        borderRadius={180}
        containerStyle={{
          borderRadius: 10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default Home;
