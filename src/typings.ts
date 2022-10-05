import type { StyleProp, ViewStyle } from 'react-native';
import type { SwipeButtonCircleProps } from './SwipeButtonCircle';
import type { SwipeButtonTextProps } from './SwipeButtonText';

type SwipeButtonPropsExtends = Omit<
  SwipeButtonCircleProps,
  'opacity' | 'panHandlers' | 'translateX'
> &
  SwipeButtonTextProps;

export interface SwipeButtonProps extends SwipeButtonPropsExtends {
  /**
   * Callback that will be invoked when complete threshold has been reached
   */
  onComplete: () => void;

  /**
   * The with of the button
   *
   * @default 90% of the screen width
   */
  width?: number;

  /**
   * If disabled is set to true it will not be possible to interace with the button
   */
  disabled?: boolean;

  /**
   * Indicates when `onComplete` should be invoked.
   *
   * @default 70
   */
  completeThresholdPercentage?: number;

  /**
   * Callback that will be invoked when the suer starts swiping
   */
  onSwipeStart?: () => void;

  /**
   * Callback that will be invoked when the suer ends swiping
   */
  onSwipeEnd?: () => void;

  /**
   * The styling of the underlay container
   */
  underlayStyle?: StyleProp<ViewStyle>;

  /**
   * Styling for the outer container
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * The height of the button
   * @default 70
   */
  height?: number;

  /**
   * The border radius of the container and the Icon
   *
   * @default (height / 2)
   */
  borderRadius?: number;

  /**
   * If true, the circle will scroll back to the start position after swipe is completed
   *
   * @default false
   */
  goBackToStart?: boolean;
}
