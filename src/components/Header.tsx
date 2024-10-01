import { colors } from '@assets/theme/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { FC } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { HEADER_HEIGHT } from 'src/utils/constants';
import Text from './Text';
interface Props {
  title: string | undefined;
  onClose?: () => void;
  rightComponent?: React.ReactNode;
  showBack?: boolean;
}
const Header: FC<Props> = ({
  title,
  onClose,
  showBack = true,
  rightComponent,
}) => {
  return (
    <View style={styles.container}>
      {showBack ? (
        <Pressable onPress={onClose} style={styles.corner_item}>
          <AntDesign name={'left'} size={24} color={colors.white} />
        </Pressable>
      ) : (
        <View style={styles.corner_item} />
      )}

      <View style={styles.title_wrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.corner_item}>{rightComponent}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

    flexDirection: 'row',

    height: HEADER_HEIGHT,
    zIndex: 2,
  },
  corner_item: {
    alignItems: 'center',
    height: HEADER_HEIGHT,
    justifyContent: 'center',
    width: HEADER_HEIGHT,
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
  },
  title_wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
});
