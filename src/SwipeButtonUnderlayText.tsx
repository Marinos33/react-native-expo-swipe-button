import React, { FC } from 'react';
import {
  TextProps,
  StyleProp,
  TextStyle,
  ViewProps,
  ViewStyle,
  StyleSheet,
  Animated,
  Text,
} from 'react-native';
import { DEFAULT_HEIGHT } from './constants';

export interface SwipeButtonUnderlayTextProps {
  /**
   * The text that will be displayed in the underlay container
   */
  underlayTitle?: string;

  /**
   * Additional props for the underlay title text
   */
  underlayTitleExtraTextProps?: TextProps;

  /**
   * Additional styling for the underlay title text
   */
  underlayTitleStyle?: StyleProp<TextStyle>;

  /**
   * Additional props for the underlay title container
   */
  underlayTitleContainerExtraViewProps?: ViewProps;

  /**
   * Additional styling for the underlay title container
   */
  underlayTitleContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Height of the underlay title container
   */
  height?: number;

  /**
   * An JSX element you can define to replace the underlay title default component. Using this will omit the others title props
   */
  underlayTitleElement?: JSX.Element;
}

interface PrivateProps {
  animation?: Animated.Value;
}

const SwipeButtonUnderlayText: FC<
  SwipeButtonUnderlayTextProps & PrivateProps
> = ({
  underlayTitle = '',
  underlayTitleExtraTextProps,
  underlayTitleStyle,
  underlayTitleContainerExtraViewProps,
  underlayTitleContainerStyle,
  underlayTitleElement,
  animation,
  height = DEFAULT_HEIGHT,
}) => {
  return (
    underlayTitleElement || (
      <Animated.View
        testID="TitleContainer"
        style={[
          styles.titleContainer,
          { height: height },
          underlayTitleContainerStyle,
          {
            opacity: animation?.interpolate({
              inputRange: [0, 225, 300],
              outputRange: [0, 0, 1],
            }),
          },
        ]}
        {...underlayTitleContainerExtraViewProps}
      >
        <Text
          numberOfLines={2}
          allowFontScaling={false}
          style={[styles.title, underlayTitleStyle]}
          testID="Title"
          {...underlayTitleExtraTextProps}
        >
          {underlayTitle}
        </Text>
      </Animated.View>
    )
  );
};

export default SwipeButtonUnderlayText;

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
