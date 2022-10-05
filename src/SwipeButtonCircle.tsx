import React, { FC } from 'react';
import { GestureResponderHandlers, Animated, StyleSheet } from 'react-native';

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
   * Element that should be displaied inside the button
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

  borderRadius?: number;

  height?: number;
}

export const SwipeButtonCircle: FC<SwipeButtonCircleProps> = ({
  Icon,
  opacity,
  panHandlers,
  translateX,
  height,
  borderRadius,
  circleBackgroundColor,
}) => {
  return (
    <Animated.View
      testID="Button"
      {...panHandlers}
      style={[
        styles.iconContainer,
        {
          opacity,
          width: height,
          height,
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
            width: height,
            height,
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
