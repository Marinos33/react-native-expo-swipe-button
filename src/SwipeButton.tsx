import React, { FC, useState } from 'react';
import {
  View,
  Animated,
  PanResponder,
  GestureResponderEvent,
  PanResponderGestureState,
  StyleSheet,
} from 'react-native';
import {
  DEFAULT_BORDER_RADIUS,
  DEFAULT_COMPLETE_THRESHOLD_PERCENTAGE,
  DEFAULT_GO_BACK_TO_START,
  DEFAULT_HEIGHT,
  DEFAULT_WIDTH,
} from './constants';

import { SwipeButtonCircle } from './SwipeButtonCircle';
import SwipeButtonText from './SwipeButtonText';
import type { SwipeButtonProps } from './typings';

const SwipeButton: FC<SwipeButtonProps> = ({
  title,
  titleContainerExtraViewProps,
  titleExtraTextProps,
  titleContainerStyle,
  titleStyle,
  underlayStyle,
  disabled,
  Icon,
  containerStyle,
  circleBackgroundColor,
  titleElement,
  onComplete,
  onSwipeEnd = () => {},
  onSwipeStart = () => {},
  height = DEFAULT_HEIGHT,
  width = DEFAULT_WIDTH,
  borderRadius = DEFAULT_BORDER_RADIUS,
  completeThresholdPercentage = DEFAULT_COMPLETE_THRESHOLD_PERCENTAGE,
  goBackToStart = DEFAULT_GO_BACK_TO_START,
}) => {
  const [endReached, setEndReached] = useState<boolean>(false);
  const opacity = disabled ? 0.5 : 1;
  const opacityStyle = { opacity };
  const [translateX] = useState<Animated.Value & { _value?: number }>(
    new Animated.Value(0)
  );
  const scrollDistance = width - completeThresholdPercentage / 100 - height;
  const completeThreshold =
    scrollDistance * (completeThresholdPercentage / 100);

  const animateToStart = () => {
    Animated.spring(translateX, {
      toValue: 0,
      tension: 10,
      friction: 5,
      useNativeDriver: false,
    }).start();

    return setEndReached(false);
  };

  const animateToEnd = () => {
    onComplete();
    Animated.spring(translateX, {
      toValue: scrollDistance,
      tension: 10,
      friction: 5,
      useNativeDriver: false,
    }).start();

    if (goBackToStart) {
      setEndReached(true);

      return animateToStart();
    }

    return setEndReached(true);
  };

  const onMove = (
    _: GestureResponderEvent,
    gestureState: PanResponderGestureState
  ) => {
    if (disabled) {
      return false;
    }

    if (gestureState.dx < 0 || gestureState.dx > scrollDistance) {
      return Animated.event([{ dx: translateX }], { useNativeDriver: false })({
        ...gestureState,
        dx: gestureState.dx < 0 ? 0 : scrollDistance,
      });
    }

    return Animated.event([{ dx: translateX }], { useNativeDriver: false })(
      gestureState
    );
  };

  const onRelease = () => {
    if (disabled) {
      return;
    }

    if (endReached) {
      return animateToStart();
    }

    const isCompleted = translateX._value! >= completeThreshold;

    return isCompleted ? animateToEnd() : animateToStart();
  };

  const panResponser = () =>
    PanResponder.create({
      onPanResponderGrant: onSwipeStart,
      onPanResponderEnd: onSwipeEnd,
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => false,
      onPanResponderMove: onMove,
      onPanResponderRelease: onRelease,
    });

  return (
    <View
      style={[
        styles.container,
        opacityStyle,
        containerStyle,
        { height, width, borderRadius },
      ]}
    >
      <SwipeButtonText
        title={title}
        titleStyle={titleStyle}
        titleExtraTextProps={titleExtraTextProps}
        height={height}
        titleContainerExtraViewProps={titleContainerExtraViewProps}
        titleContainerStyle={titleContainerStyle}
        titleElement={titleElement}
      />

      {!disabled && (
        <Animated.View
          testID="Underlay"
          style={[
            styles.underlayContainer,
            underlayStyle,
            {
              width: translateX.interpolate({
                inputRange: [0, 100],
                outputRange: [31, 131],
              }),
              height,
            },
          ]}
        />
      )}

      <SwipeButtonCircle
        circleBackgroundColor={circleBackgroundColor}
        Icon={Icon}
        opacity={opacity}
        panHandlers={panResponser().panHandlers}
        translateX={translateX}
        borderRadius={borderRadius}
        height={height}
      />
    </View>
  );
};

export default SwipeButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  underlayContainer: {
    position: 'absolute',
    backgroundColor: '#152228',
    borderTopStartRadius: DEFAULT_BORDER_RADIUS,
    borderBottomStartRadius: DEFAULT_BORDER_RADIUS,
  },
});
