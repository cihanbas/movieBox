import { StyleSheet, Text as NativeText, View, TextProps } from 'react-native';
import React, { FC } from 'react';
import { colors } from '@assets/theme/Colors';

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
    color: colors.text,
  },
});
