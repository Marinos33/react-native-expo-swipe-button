# react-native-floating-tag-button

[![NPM Status](https://img.shields.io/npm/dm/react-native-floating-tag-button.svg?style=flat-square)](https://www.npmjs.com/package/react-native-floating-tag-button)

![Desktop 05-08-22 14-52-07](https://user-images.githubusercontent.com/51862073/183081576-4b0aec57-d72c-4af1-a12e-370ef4167f9e.gif)


A floating button with animated tags that you can add to.

## Installations

```
npm install react-native-floating-tag-button --save
yarn install react-native-floating-tag-button
```

## Usage

```js
import { TagSource, TagButton } from 'react-native-floating-tag-button';

const data: TagSource[] = [
   { value: 'Tag 1', label: 'test 1' },
   { value: 'Tag 2', label: 'test 2' },
   { value: 'Tag 3', label: 'test 3' },
];

const onSelect = (selectedTag: string[]) => {
   //do something with selectedTag
};

<TagButton
  dataSource={data}
  onTagSelected={onSelect}
  icon={
    <Ionicons
      name="menu"
      size={24}
      color="white"
      style={{ backgroundColor: 'blue', borderRadius: 180, padding: 10 }}
    />
  }
  position={{ bottom: 15, right: 15 }}
  tagContainerStyle={{
  backgroundColor: 'red',
  marginRight: 10,
  }}
  textStyle={{ color: 'yellow', fontSize: 14 }}
  activeTagContainerStyle={{ backgroundColor: 'green' }}
  activeTextStyle={{ color: 'white' }}
  tintColor="black"
  touchableOpacity />
```
### Properties

| Prop                                 | Description                                                                                                                    | Type                                                                 | Default                                                                                                 | Is Required  |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------| ---------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|--------------|
| **`dataSource`**                     | the tags to display and use.                                                                                                   | `TagSource[]`                                                        |`[]`                                                                                                     | yes          |
| **`onTagSelected`**                  | the callback method when a tag is selected.                                                                                    | `(tags: string[]) => void`                                           |`none`                                                                                                   | yes          |
| **`icon`**                           | the element to display as the floating button to hide and show the tags. the element can be an icon, a text, an image, etc.    | `JSX.Element`                                                        |`none`                                                                                                   | yes          |
| **`sortTags`**                       | if true, the tags will be sorted alphabetically.                                                                               | `boolean`                                                            |`false`                                                                                                  | no           |
| **`position`**                       | an object to define the position of the button on the screen.                                                                  | `{ top?: number; left?: number; right?: number; bottom?: number; } ` |`{ bottom: 10, right: 5 }`                                                                               | no           |
| **`direction`**                      | define the direction of the alignement between the floating button and his tags.                                               | `'row' \| 'row-reverse' \| 'column' \| 'column-reverse'`             |`column`                                                                                                 | no           |
| **`tagContainerStyle`**              | the style of the container of the tags.                                                                                        | `StyleProp<ViewStyle>`                                               |`{ backgroundColor: '#787878', borderRadius: 180, width: 75 }`                                           | no           |
| **`textStyle`**                      | the style of the labels of the tags.                                                                                           | `StyleProp<TextStyle>`                                               |`{ color: '#ffffff', fontSize: 14 }`                                                                     | no           |
| **`activeTagContainerStyle`**        | the style of the container of the tags when selected.                                                                          | `StyleProp<ViewStyle>`                                               |`{ backgroundColor: 'white', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, borderWidth: 1 }`| no           |
| **`activeTextStyle`**                | the style of the labels of the tags when selected.                                                                             | `StyleProp<TextStyle>`                                               |`{ color: '#333' }`                                                                                      | no           |
| **`tintColor?`**                     | the color of the border of the tags.                                                                                           | `string`                                                             |`00a8ff`                                                                                                 | no           |
| **`touchableOpacity?`**              | if true, the tags will use a touchable opacity as clickable component, otherwise they will use a touchable without feedback.   | `boolean`                                                            |`false`                                                                                                  | no           |
| **`animationDuration?`**             | the duration of the animation when the tags are shown.                                                                         | `number`                                                             |`200`                                                                                                    | no           |

A complete minimal example can be found [Here](example/src/Home.tsx).

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository.

## License

MIT
