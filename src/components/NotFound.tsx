import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import Text from './Text';
import { padding } from 'src/utils/constants';
import { colors } from '@assets/theme/Colors';
interface Props {
  title?: string;
  desc?: string;
}
const data = {
  title: "Oh darn. We don't have that.",
  desc: 'Try searching for another movie',
};
const NotFound: FC<Props> = ({ title = data.title, desc = data.desc }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {title} </Text>
      <Text style={styles.desc}> {desc}</Text>
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingTop: padding.xl,
    rowGap: 10,
  },
  desc: {
    color: colors.white,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
  },
});
