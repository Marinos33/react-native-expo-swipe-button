import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { SwipeButton } from '../../src/index';

function Home(): JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <SwipeButton
        Icon={<Text>X</Text>}
        onComplete={() => Alert.alert('Completed')}
        title="Swipe to complete"
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default Home;
