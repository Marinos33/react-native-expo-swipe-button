import React from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native';
//import { SwipeButton } from '../../src/index';
import { SwipeButton } from 'react-native-expo-swipe-button';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

function Home(): JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        flexDirection: 'column',
      }}
    >
      <SwipeButton
        Icon={
          <MaterialIcons name="keyboard-arrow-right" size={50} color="white" />
        }
        onComplete={() => Alert.alert('Completed')}
        title="Swipe to complete"
        borderRadius={180}
        containerStyle={{ backgroundColor: 'gray' }}
        underlayTitle="Release to complete"
        underlayTitleStyle={{ color: 'white' }}
      />
      <SwipeButton
        Icon={
          <MaterialIcons name="keyboard-arrow-right" size={50} color="white" />
        }
        onComplete={() => {}}
        title="Gradient swipe"
        borderRadius={180}
        containerGradientProps={{
          colors: ['red', 'cyan'],
          start: [0, 0.5],
          end: [1, 0.5],
        }}
        underlayTitle="Release to complete"
        underlayStyle={{
          borderRadius: 180,
        }}
        underlayContainerGradientProps={{
          colors: ['green', 'yellow'],
          start: [0, 0.5],
          end: [1, 0.5],
        }}
      />
      <SwipeButton
        Icon={
          <MaterialIcons name="keyboard-arrow-right" size={50} color="white" />
        }
        onComplete={() => {}}
        title="Custom format swipe"
        borderRadius={25}
        containerStyle={{
          backgroundColor: 'transparent',
          borderWidth: 0,
          borderColor: 'red',
        }}
        underlayStyle={{
          borderRadius: 0,
          borderWidth: 5,
          borderColor: 'red',
          backgroundColor: 'transparent',
        }}
        underlayTitle="Release to complete"
        underlayTitleStyle={{ color: 'white' }}
        completeThresholdPercentage={50}
        goBackToStart
        titleElement={
          <LinearGradient
            colors={['red', 'yellow']}
            style={[styles.titleContainer, { height: 60, borderRadius: 25 }]}
            start={[0, 0.5]}
            end={[1, 0.5]}
          >
            <Text
              numberOfLines={2}
              allowFontScaling={false}
              style={[styles.title]}
            >
              Full custom swipe
            </Text>
          </LinearGradient>
        }
        underlayTitleElement={
          <LinearGradient
            colors={['pink', 'yellow']}
            style={[styles.titleContainer, { height: 60, borderRadius: 25 }]}
            start={[0, 0.5]}
            end={[1, 0.5]}
          >
            <Text
              numberOfLines={2}
              allowFontScaling={false}
              style={[styles.title]}
            >
              Release to complete
            </Text>
          </LinearGradient>
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
