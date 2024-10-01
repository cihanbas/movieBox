/* eslint-disable react-native/no-inline-styles */
import { colors as appColors } from '@assets/theme/Colors';
import React, { FC, useEffect, useRef } from 'react';
import {
  Animated,
  View,
  Platform,
  ViewProps,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import { LinearGradientProps } from 'react-native-linear-gradient';
const colors = {
  gray4: '#000',
  gray5: appColors.inputBG,
};
export interface SkeletonProps extends ViewProps {
  /**
   * show circular variant
   */
  circle?: boolean;
  /**
   * Width of Skeleton View
   */
  width?: ViewStyle['width'];
  /**
   * Height of Skeleton View
   * @default 12
   */
  height?: ViewStyle['height'];
  /**
   * Type of animation
   */
  animation?: 'none' | 'pulse' | 'wave';
  /**
   * Custom style for skeleton gradient
   */
  skeletonStyle?: StyleProp<ViewStyle>;
  /**
   * Custom Linear Gradient Component
   * @type React Component
   */
  LinearGradientComponent?: React.ComponentType<LinearGradientProps>;
}

export const Skeleton: FC<SkeletonProps> = ({
  circle,
  width = '100%',
  height,
  animation = 'pulse',
  style,
  skeletonStyle,
  LinearGradientComponent,
  ...rest
}) => {
  const animationRef = useRef(new Animated.Value(0));
  const animationLoop = useRef<Animated.CompositeAnimation>();

  const [layoutWidth, setLayoutWidth] = React.useState<number>(0);

  useEffect(() => {
    animationLoop.current = Animated.timing(animationRef.current, {
      toValue: 2,
      delay: 400,
      duration: 1500,
      useNativeDriver: !!Platform.select({
        web: false,
        native: true,
      }),
    });
    animationRef.current.setValue(0);
    Animated.loop(animationLoop.current).start();
  }, []);

  return (
    <View
      accessibilityRole="none"
      accessibilityLabel="loading..."
      accessible={false}
      testID="RNE__Skeleton"
      onLayout={({ nativeEvent }) => {
        setLayoutWidth(nativeEvent.layout.width);
      }}
      style={[
        styles.container,
        {
          width: width,
          height: height || 12,
          backgroundColor: colors.gray4,
        },
        circle && {
          borderRadius: 50,
          height: height || width,
        },
        style,
      ]}
      {...rest}
    >
      {animation !== 'none' && (
        <Animated.View
          style={[
            styles.skeleton,
            !LinearGradientComponent && {
              backgroundColor: colors.gray5,
            },
            animation === 'pulse' && {
              width: '100%',
              opacity: animationRef.current.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [1, 0, 1],
              }),
            },
            animation === 'wave' && {
              transform: [
                {
                  translateX: animationRef.current.interpolate({
                    inputRange: [0, 2],
                    outputRange: [-layoutWidth * 2, layoutWidth * 2],
                  }),
                },
              ],
            },
            skeletonStyle,
          ]}
        >
          {LinearGradientComponent && (
            <LinearGradientComponent
              style={styles.skeleton}
              colors={[colors.gray4, colors.gray5, colors.gray4]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
          )}
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    overflow: 'hidden',
  },
  skeleton: {
    height: '100%',
  },
});
