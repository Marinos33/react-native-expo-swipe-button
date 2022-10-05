import type { LinearGradientProps } from 'expo-linear-gradient';
import type { StyleProp, ViewStyle } from 'react-native';
import type { SwipeButtonCircleProps } from './SwipeButtonCircle';
import type { SwipeButtonTextProps } from './SwipeButtonText';
import type { SwipeButtonUnderlayTextProps } from './SwipeButtonUnderlayText';

type SwipeButtonPropsExtends = Omit<
  SwipeButtonCircleProps,
  'opacity' | 'panHandlers' | 'translateX'
> &
  SwipeButtonTextProps &
  SwipeButtonUnderlayTextProps;

export interface SwipeButtonProps extends SwipeButtonPropsExtends {
  /**
   * If disabled is set to true it will not be possible to interact with the button
   */
  disabled?: boolean;

  /**
   * Indicates when `onComplete` should be invoked.
   *
   * @default 70
   */
  completeThresholdPercentage?: number;

  /**
   * If true, the circle will scroll back to the start position after swipe is completed
   *
   * @default false
   */
  goBackToStart?: boolean;

  /**
   * The width of the component
   *
   * @default 90% of the screen width
   */
  width?: number;

  /**
   * The height of the component
   * @default 70
   */
  height?: number;

  /**
   * The styling of the underlay container
   */
  underlayStyle?: StyleProp<ViewStyle>;

  /**
   * Styling of the outer container
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * The border radius of the container and the Icon
   *
   * @default (height / 2)
   */
  borderRadius?: number;

  /**
   * gradient props for the container. Using this will actually use a linear gradient as view
   */
  containerGradientProps?: {
    colors?: string[];
  } & Omit<LinearGradientProps, 'colors' | 'style'>;

  /**
   * gradient props for the underlayContainer. Using this will actually use a linear gradient as view
   */
  underlayContainerGradientProps?: {
    colors?: string[];
  } & Omit<LinearGradientProps, 'colors' | 'style'>;

  /**
   * Callback that will be invoked when complete threshold has been reached
   */
  onComplete: () => void;

  /**
   * callback for swiping in progress
   */
  onSwipeProgress?: (progress: number) => void;

  /**
   * Callback that will be invoked when the user starts swiping
   */
  onSwipeStart?: () => void;

  /**
   * Callback that will be invoked when the user ends swiping
   */
  onSwipeEnd?: () => void;
}
