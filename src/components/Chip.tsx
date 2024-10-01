import { StyleSheet, View } from 'react-native';
import React from 'react';
import Text from './Text';
import { padding } from 'src/utils/constants';
import { colors } from '@assets/theme/Colors';

const Chip = ({ text }: { text: string }) => {
  return (
    <View style={styles.chip}>
      <Text style={styles.chip_text}>{text}</Text>
    </View>
  );
};

export default Chip;

const styles = StyleSheet.create({
  chip: {
    alignSelf: 'flex-start',
    backgroundColor: colors.chipBG,
    borderRadius: padding.lg,
    paddingHorizontal: padding.lg,
    paddingVertical: padding.sm,
  },
  chip_text: {
    color: colors.chipTextColor,
    fontWeight: 'bold',
  },
});
