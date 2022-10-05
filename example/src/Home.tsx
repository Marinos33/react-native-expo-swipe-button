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
        titleElement={
          <View style={[styles.titleContainer, { height: 5 }]}>
            <Text
              numberOfLines={2}
              allowFontScaling={false}
              style={[styles.title]}
            >
              heyo
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 16,
    maxWidth: '50%',
    textAlign: 'center',
  },
});

export default Home;
