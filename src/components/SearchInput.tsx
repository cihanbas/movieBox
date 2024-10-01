import { colors } from '@assets/theme/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { FC, useEffect, useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { useAppSelector } from 'src/store/hooks';
import { HEADER_HEIGHT, padding } from 'src/utils/constants';
interface IProps {
  // eslint-disable-next-line no-unused-vars
  onChangeText: (text: string) => void;

  onPressFilter: () => void;
}
export const SearchInput: FC<IProps> = ({ onChangeText, onPressFilter }) => {
  const { year } = useAppSelector((s) => s.searchSlice);
  const [value, setValue] = useState<null | string>(null);
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (typeof value == 'string') {
        onChangeText(value);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [value]);
  return (
    <View style={styles.input_container}>
      <AntDesign name="search1" size={24} color={colors.card} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={value || ''}
        onChangeText={setValue}
        placeholderTextColor={colors.placeholder}
      />
      <Pressable onPress={onPressFilter}>
        {year && <View style={styles.filter_badge} />}

        <AntDesign name="filter" size={24} color={colors.card} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  filter_badge: {
    backgroundColor: colors.notification,
    borderRadius: 6,
    height: 6,
    marginRight: 3,
    marginTop: 1,
    position: 'absolute',
    right: 0,
    width: 6,
  },
  input: {
    color: colors.card,
    flex: 1,
    fontWeight: 'bold',
    height: HEADER_HEIGHT - padding.lg,
    paddingLeft: padding.sm,
  },
  input_container: {
    alignItems: 'center',
    backgroundColor: colors.black,
    borderRadius: padding.lg,
    elevation: 5,
    flexDirection: 'row',
    height: HEADER_HEIGHT,
    margin: padding.lg,
    padding: padding.lg,
    shadowColor: colors.card,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,

    shadowRadius: 3.84,
  },
});
