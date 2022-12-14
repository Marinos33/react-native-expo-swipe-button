import React, { FC } from 'react';
import {
  View,
  Text,
  TextProps,
  StyleProp,
  TextStyle,
  ViewProps,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import { DEFAULT_HEIGHT } from './constants';

export interface SwipeButtonTextProps {
  /**
   * The text that will be displayed in the container
   */
  title: string;

  /**
   * Additional props for the title text
   */
  titleExtraTextProps?: TextProps;

  /**
   * Additional styling for the title text
   */
  titleStyle?: StyleProp<TextStyle>;

  /**
   * Additional props for the title container
   */
  titleContainerExtraViewProps?: ViewProps;

  /**
   * Additional styling for the title container
   */
  titleContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Height of the title container
   */
  height?: number;

  /**
   * An JSX element you can define to replace the title default component. Using this will omit the others title props
   */
  titleElement?: JSX.Element;
}

const SwipeButtonText: FC<SwipeButtonTextProps> = ({
  title,
  titleStyle,
  titleContainerExtraViewProps,
  titleContainerStyle,
  titleExtraTextProps,
  titleElement,
  height = DEFAULT_HEIGHT,
}) => {
  return (
    titleElement || (
      <View
        testID="TitleContainer"
        style={[styles.titleContainer, { height: height }, titleContainerStyle]}
        {...titleContainerExtraViewProps}
      >
        <Text
          numberOfLines={2}
          allowFontScaling={false}
          style={[styles.title, titleStyle]}
          testID="Title"
          {...titleExtraTextProps}
        >
          {title}
        </Text>
      </View>
    )
  );
};

export default SwipeButtonText;

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
