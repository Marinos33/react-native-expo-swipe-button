import React from 'react';
import { Animated, StyleProp, View, ViewStyle } from 'react-native';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';

interface SwipeGradientProps extends Omit<LinearGradientProps, 'colors'> {
  style: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  colors?: string[];
}

class SwipeGradientView extends React.Component<SwipeGradientProps> {
  render() {
    const { style, children, colors, start, end, locations } = this.props;
    if (colors) {
      if (!children) {
        return (
          <LinearGradient
            colors={colors}
            end={end}
            locations={locations}
            start={start}
            style={style}
          />
        );
      }
      return (
        <LinearGradient
          colors={colors}
          end={end}
          locations={locations}
          start={start}
          style={style}
        >
          {children}
        </LinearGradient>
      );
    }
    return <View style={style}>{children}</View>;
  }
}

export default SwipeGradientView;

export const AnimatedGradient =
  Animated.createAnimatedComponent(SwipeGradientView);
