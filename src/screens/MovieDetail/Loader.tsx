import { Skeleton } from '@components/Skeleton';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { padding, width } from 'src/utils/constants';

const DetailLoader = () => {
  return (
    <View style={styles.skeleton}>
      <Skeleton height={width / 2} width={width} />
      <Skeleton height={20} width={width} />
      <Skeleton height={20} width={width} />
    </View>
  );
};

export default DetailLoader;

const styles = StyleSheet.create({
  skeleton: {
    rowGap: padding.lg,
  },
});
