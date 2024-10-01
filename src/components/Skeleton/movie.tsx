import React from 'react';
import { StyleSheet, View } from 'react-native';
import { padding, width } from 'src/utils/constants';
import { Skeleton } from '.';

const MovieLoader = () => {
  return (
    <View style={styles.container}>
      {createArray(12).map((item) => {
        return (
          <Skeleton
            height={120}
            width={width / 2 - padding.lg * 2}
            key={item}
            style={styles.box}
          />
        );
      })}
    </View>
  );
};

export default MovieLoader;
function createArray(N: number) {
  return [...Array(N).keys()].map((i) => i + 1);
}
const styles = StyleSheet.create({
  box: { margin: 5 },
  container: { flexDirection: 'row', flexWrap: 'wrap', padding: padding.lg },
});
