import { colors } from '@assets/theme/Colors';
import Header from '@components/Header';
import Text from '@components/Text';
import React, { FC, useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IRootStackProps } from 'src/navigation/types';
import { selectFilter } from 'src/store/features/search/searchSlices';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { padding } from 'src/utils/constants';
interface Props extends IRootStackProps<'Filter'> {}

const FilterScreen: FC<Props> = ({ navigation }) => {
  const { year } = useAppSelector((s) => s.searchSlice);
  const [value, setValue] = useState<string>(year);
  const dispatch = useAppDispatch();
  const onSave = () => {
    navigation.goBack();
    dispatch(selectFilter(value));
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <Header title="Filter" onClose={navigation.goBack} />
      <View style={styles.input_container}>
        <Text>Year</Text>
        <TextInput
          keyboardType="decimal-pad"
          maxLength={4}
          style={styles.input}
          placeholder="year"
          value={value || ''}
          onChangeText={setValue}
          placeholderTextColor={colors.placeholder}
        />
      </View>
      <Pressable style={StyleSheet.flatten([styles.btn])} onPress={onSave}>
        <Text style={styles.btn_txt}>Save</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.primary,
    borderRadius: padding.lg,
    marginHorizontal: padding.xl,
    marginVertical: 20,
    padding: padding.md,
  },
  btn_txt: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  container: { flex: 1 },
  input: {
    backgroundColor: colors.black,
    color: colors.card,
    marginTop: padding.md,
    padding: padding.lg,
  },
  input_container: {
    flex: 1,
    padding: padding.xl,
  },
});
