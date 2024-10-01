import { colors } from '@assets/theme/Colors';
import Header from '@components/Header';
import NotFound from '@components/NotFound';
import Text from '@components/Text';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import React, { FC, useMemo } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IRootStackProps } from 'src/navigation/types';
import { api } from 'src/services/api';
import { addOrRemove } from 'src/store/features/favorite/favoriteSlice';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { padding, width } from 'src/utils/constants';
import { imageURL } from 'src/utils/helpers';
import DetailLoader from './Loader';
import Chip from '@components/Chip';
import { Image } from 'expo-image';

interface Props extends IRootStackProps<'MovieDetail'> {}
const MovieDetailScreen: FC<Props> = ({ route, navigation }) => {
  const { movies } = useAppSelector((s) => s.favorites);
  const dispatch = useAppDispatch();
  const { movieID } = route.params;
  const isFav = useMemo(
    () => movies.find((item) => item.id == movieID),
    [movies],
  );

  const { data, isPending, isError } = useQuery({
    queryKey: ['Detail', movieID],
    queryFn: async () => (await api.movieDetail(movieID)).data,
  });
  const goBack = () => {
    navigation.goBack();
  };
  const AddRemoveFav = () => {
    if (data) {
      dispatch(addOrRemove(data));
    }
  };
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <Header
        title={data?.title}
        onClose={goBack}
        rightComponent={
          <Pressable onPress={AddRemoveFav}>
            <AntDesign
              name={isFav ? 'heart' : 'hearto'}
              size={24}
              color={isFav ? colors.primary : colors.white}
            />
          </Pressable>
        }
      />
      {isPending && <DetailLoader />}
      {isError && <NotFound />}
      {data && (
        <ScrollView style={styles.container}>
          <Image
            source={{ uri: imageURL(data.backdrop_path) }}
            contentFit="cover"
            style={styles.poster}
            cachePolicy="memory-disk"
          />
          <View style={styles.content_wrapper}>
            <Text style={styles.title}>{data.title}</Text>
            <View style={styles.btn_wrapper}>
              <Chip text={moment(data.release_date).format('DD/MM/YYYY')} />

              {data.imdb_id && <Chip text={data.imdb_id} />}
            </View>
            <Text>{data.overview}</Text>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default MovieDetailScreen;

const styles = StyleSheet.create({
  btn_wrapper: {
    columnGap: padding.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: padding.lg,
    rowGap: padding.lg,
  },

  container: {
    flex: 1,
  },
  content_wrapper: {
    padding: padding.lg,
    rowGap: padding.lg,
  },
  poster: {
    height: width / 2,
    width,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
