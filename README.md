# react-native-expo-swipe-button

[![NPM Status](https://img.shields.io/npm/dm/react-native-floating-tag-button.svg?style=flat-square)](https://www.npmjs.com/package/react-native-floating-tag-button)

![ezgif com-gif-maker(1)](https://user-images.githubusercontent.com/51862073/194095325-8a621eeb-03bb-4006-b681-75c92b5808a6.gif)


A swipe button ready-to-use and highly customizable

## Installations

```
npm install react-native-expo-swipe-button --save
yarn install react-native-expo-swipe-button
```

## Usage

```js
import { SwipeButton } from 'react-native-expo-swipe-button';

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
```
### Properties

| Prop                              | Description                                                                      | Type      | Default | Is Required |
|-----------------------------------|----------------------------------------------------------------------------------|-----------|---------|-------------|
| **`disabled`**                    | If disabled is set to true it will not be possible to interact with the button.  | `boolean` | `false` | no          |
| **`completeThresholdPercentage`** | Determine when `onComplete` should be invoked.                                   | `number`  | `70%`   | no          |
| **`goBackToStart`**               | If true, the circle will go back to the start position after swipe is completed. | `boolean` | `false` | no          |
| **`width`**                       | The width of the component.                                                      | `number`  | `90%`   | no          |
| **`height`**                      | The height of the component.                                                     | `number`  | `70`    | no          |
| `circleSize`                      | define the size of the circle button                                             | `number`  | `70`    | no          |
| `underlayStyle`                   | The styling of the underlay container                                            | `StyleProp<ViewStyle>` | `{position: 'absolute',backgroundColor: '#152228',borderTopStartRadius: DEFAULT_BORDER_RADIUS,borderBottomStartRadius: DEFAULT_BORDER_RADIUS,borderBottomEndRadius: DEFAULT_BORDER_RADIUS, borderTopEndRadius: DEFAULT_BORDER_RADIUS }` | no  |
| `containerStyle`                       | Styling of the outer container                                                                                    | `StyleProp<ViewStyle>`                                                         | `{backgroundColor: 'white',alignSelf: 'center',justifyContent: 'center' marginVertical: 10,
  }`                                                                                                                                                    | no  |
| `iconContainerStyle`                   | The styling of the button                                                                                         | `StyleProp<ViewStyle>`                                                         | `{ position: 'absolute', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }`                                                                                                                                                 | no  |
| `borderRadius`                         | The border radius of the container and the Icon                                                                   | `number`                                                                       | `height / 2`                                                                                                                                                                                                                                                            | no  |
| `containerGradientProps`               | gradient props for the container. Using this will actually use a linear gradient as view                          | `{ colors?: string[]; } & Omit<LinearGradientProps, 'colors' | 'style'>` | none                                                                                                                                                                                                                                                                    | no  |
| `underlayContainerGradientProps`       | gradient props for the underlayContainer. Using this will actually use a linear gradient as view                  | `{ colors?: string[]; } & Omit<LinearGradientProps, 'colors' | 'style'>` | none                                                                                                                                                                                                                                                                    | no  |
| `Icon`                                 | Element that should be displayed inside the button                                                                | `JSX.Element`                                                                  | none                                                                                                                                                                                                                                                                    | yes |
| `circleBackgroundColor`                | Background color for the circle                                                                                   | `string`                                                                       | `black`                                                                                                                                                                                                                                                                 | no  |
| `borderRadius`                         | set border radius for the circle                                                                                  | `number`                                                                       | none                                                                                                                                                                                                                                                                    | no  |
| `title`                                | The text that will be displayed in the container                                                                  | `string`                                                                       | none                                                                                                                                                                                                                                                                    | yes |
| `titleExtraTextProps`                  | Additional props for the title text                                                                               | `TextProps`                                                                    | none                                                                                                                                                                                                                                                                    | no  |
| `titleStyle`                           | Additional styling for the title text                                                                             | `StyleProp<TextStyle>`                                                         | `{ color: 'black', fontSize: 16, maxWidth: '50%', textAlign: 'center' }`                                                                                                                                                                             | no  |
| `titleContainerExtraViewProps`         | Additional props for the title container                                                                          | `ViewProps`                                                                    | none                                                                                                                                                                                                                                                                    | no  |
| `titleContainerStyle`                  | Additional styling for the title container                                                                        | `StyleProp<ViewStyle>`                                                         | `{ justifyContent: 'center', alignItems: 'center' }`                                                                                                                                                                                                         | no  |
| `titleElement`                         | An JSX element you can define to replace the title default component. Using this will omit the others title props | `JSX.Element`                                                                  | none                                                                                                                                                                                                                                                                    | no  |
| `underlayTitle`                        | The text that will be displayed in the underlay container                                                         | `string`                                                                       | `''`                                                                                                                                                                                                                                                                    | no  |
| `underlayTitleExtraTextProps`          | Additional props for the underlay title text                                                                      | `TextProps`                                                                    | none                                                                                                                                                                                                                                                                    | no  |
| `underlayTitleStyle`                   | Additional styling for the underlay title text                                                                    | `StyleProp<TextStyle>`                                                         | `{ color: 'black', fontSize: 16, maxWidth: '50%', textAlign: 'center' }`                                                                                                                                                                      | no  |
| `underlayTitleContainerExtraViewProps` | Additional props for the underlay title container                                                                 | `ViewProps`                                                                    | none                                                                                                                                                                                                                                                                    | no  |
| `underlayTitleContainerStyle` | Additional styling for the underlay title container                                                                        | `StyleProp<ViewStyle>`       | `{ justifyContent: 'center' alignItems: 'center' }` | no  |
| `underlayTitleElement`        | An JSX element you can define to replace the underlay title default component. Using this will omit the others title props | `JSX.Element`                | none                                                            | no  |
| `onComplete`                  | Callback that will be invoked when complete threshold has been reached                                                     | `() => void`                 | none                                                            | yes |
| `onSwipeProgress`             | callback for swiping in progress                                                                                           | `(progress: number) => void` | none                                                            | no  |
| `onSwipeStart`                | Callback that will be invoked when the user starts swiping                                                                 | `() => void`                 | none                                                            | no  |
| `onSwipeEnd`                  | Callback that will be invoked when the user ends swiping                                                                   | `() => void`                 | none                                                            | no  |


A complete minimal example can be found [Here](example/src/Home.tsx).

## Known issues


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository.

## License

MIT
