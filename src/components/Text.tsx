import { colors } from '@assets/theme/Colors';
import React, { FC } from 'react';
import { Text as NativeText, StyleSheet, TextProps } from 'react-native';

const Text: FC<TextProps> = (props) => {
  return (
    <NativeText
      {...props}
      style={StyleSheet.flatten([styles.text, props.style])}
    >
      {props.children}
    </NativeText>
  );
};

export default Text;

const styles = StyleSheet.create({
  text: {
    color: colors.white,
  },
});
