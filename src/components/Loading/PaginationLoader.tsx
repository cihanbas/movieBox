import { colors } from '@assets/theme/Colors';
import React, { FC } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
interface Props {
  visible: boolean;
}
const PaginationLoader: FC<Props> = ({ visible }) => {
  if (visible) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color={colors.primary} size={'large'} />
      </View>
    );
  }
  return null;
};

export default PaginationLoader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.transparent,
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
  },
});
