import { colors } from '@assets/theme/Colors';
import Text from '@components/Text';
import { memo } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Movie } from 'src/services/types/Movie';
import { padding, width } from 'src/utils/constants';
import { imageURL } from 'src/utils/helpers';
import { Image } from 'expo-image';

const MovieItem = ({ item, onPress }: { item: Movie; onPress: () => void }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={{
          uri: imageURL(item.backdrop_path),
        }}
        cachePolicy="memory-disk"
        style={styles.img}
        contentFit="cover"
      />
      <Text numberOfLines={1} style={styles.item_title}>
        {item.title}
      </Text>
    </Pressable>
  );
};

export default memo(MovieItem);
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    borderRadius: 12,
    flex: 1,
    margin: 4,
    maxWidth: width / 2 - padding.lg,
    overflow: 'hidden',
  },
  img: {
    flex: 1,
    height: 110,
    justifyContent: 'flex-end',
  },

  item_title: {
    color: colors.white,
    flex: 1,
    padding: 4,
    textAlign: 'center',
  },
});
