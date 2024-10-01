import { colors } from '@assets/theme/Colors';
import Text from '@components/Text';
import Feather from '@expo/vector-icons/Feather';
import moment from 'moment';
import { memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { MovieDetail } from 'src/services/types/MovieDetail';
import { padding } from 'src/utils/constants';
import { imageURL } from 'src/utils/helpers';
import { Image } from 'expo-image';

interface Props {
  item: MovieDetail;
  onRemove: () => void;
  onPress: () => void;
}
const FavoriteItem = ({ item, onRemove, onPress }: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={{
          uri: imageURL(item.backdrop_path),
        }}
        style={styles.img}
        contentFit="cover"
        cachePolicy="memory-disk"
      />
      <View style={styles.content_wrapper}>
        <View style={styles.row}>
          <Text numberOfLines={3} style={styles.item_title}>
            {item.title}
          </Text>
          <Pressable onPress={onRemove}>
            <Feather name="trash-2" size={24} color={colors.white} />
          </Pressable>
        </View>
        <View style={styles.row}>
          <Text>{moment(item.release_date).format('YYYY')}</Text>
          <Text>{item.imdb_id}</Text>
        </View>
      </View>
    </Pressable>
  );
};
export default memo(FavoriteItem);
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,

    borderBottomColor: colors.primary,
    borderBottomWidth: StyleSheet.hairlineWidth,
    columnGap: padding.lg,
    flex: 1,
    flexDirection: 'row',
    marginBottom: padding.xs,
    overflow: 'hidden',
    paddingHorizontal: padding.lg,
  },
  content_wrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
    rowGap: padding.lg,
  },

  img: {
    height: 90,
    width: 150,
  },
  item_title: {
    color: colors.white,
    flex: 1,
    padding: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
