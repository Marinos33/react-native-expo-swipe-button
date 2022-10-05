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
        //circleSize={60}
        /*iconContainerStyle={{ marginStart: 5 }}
        containerStyle={{ borderWidth: 5, borderColor: 'red' }}
        underlayStyle={{
          borderWidth: 5,
          borderColor: 'red',
          borderRadius: 180,
        }}
        onSwipeProgress={(progress) => console.log(progress)}
        containerGradientProps={{
          colors: ['red', 'blue'],
          start: [0, 0.5],
          end: [1, 0.5],
        }}
        underlayContainerGradientProps={{
          colors: ['green', 'yellow'],
          start: [0, 0.5],
          end: [1, 0.5],
        }}*/
        titleElement={
          <View style={[styles.titleContainer, { height: 5 }]}>
            <Text
              numberOfLines={2}
              allowFontScaling={false}
              style={[styles.title]}
            >
              hey
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
