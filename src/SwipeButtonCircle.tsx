import React, { FC } from 'react';
import {
  GestureResponderHandlers,
  Animated,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

export interface SwipeButtonCircleProps {
  /**
   * GestureHandlers for when swiping the button
   */
  panHandlers: GestureResponderHandlers;

  /**
   * Opacity of the element
   */
  opacity?: number;

  /**
   * Element that should be displayed inside the button
   */
  Icon: JSX.Element;

  /**
   * Determinates the value of the button
   */
  translateX: Animated.Value;

  /**
   * Background color for the circle
   */
  circleBackgroundColor?: string;

  /**
   * set border radius for the circle
   */
  borderRadius?: number;

  /**
   * set the size (width and height) of the circle
   */
  circleSize?: number;

  /**
   * Additional styling for the circle
   */
  iconContainerStyle?: StyleProp<ViewStyle>;
}

export const SwipeButtonCircle: FC<SwipeButtonCircleProps> = ({
  Icon,
  opacity,
  panHandlers,
  translateX,
  circleSize,
  borderRadius,
  circleBackgroundColor,
  iconContainerStyle,
}) => {
  return (
    <Animated.View
      testID="Button"
      {...panHandlers}
      style={[
        styles.iconContainer,
        iconContainerStyle,
        {
          opacity,
          width: circleSize,
          height: circleSize,
          borderRadius,
          transform: [{ translateX }],
        },
      ]}
    >
      <Animated.View
        testID="IconContainer"
        style={[
          styles.innerIconContainer,
          {
            backgroundColor: circleBackgroundColor,
            width: circleSize,
            height: circleSize,
            borderRadius,
          },
          { opacity },
        ]}
      >
        {Icon}
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
