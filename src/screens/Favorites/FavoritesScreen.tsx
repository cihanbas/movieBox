import FavoriteItem from '@components/FavoriteItem';
import Header from '@components/Header';
import NotFound from '@components/NotFound';
import React, { FC, useCallback } from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IBottomCompositeScreenProps } from 'src/navigation/types';
import { MovieDetail } from 'src/services/types/MovieDetail';
import { addOrRemove } from 'src/store/features/favorite/favoriteSlice';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';

interface Props extends IBottomCompositeScreenProps<'Favorites'> {}
const FavoritesScreen: FC<Props> = ({ navigation }) => {
  const { movies } = useAppSelector((s) => s.favorites);
  const dispatch = useAppDispatch();
  const AddRemoveFav = (movie: MovieDetail) => {
    dispatch(addOrRemove(movie));
  };
  const navigateToDetail = (id: number) => {
    navigation.navigate('MovieDetail', { movieID: id });
  };
  const renderItem: ListRenderItem<MovieDetail> = useCallback(
    ({ item }) => (
      <FavoriteItem
        item={item}
        onRemove={() => AddRemoveFav(item)}
        onPress={() => navigateToDetail(item.id)}
      />
    ),
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Favorites" showBack={false} />
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={styles.contentContainer}
        ListEmptyComponent={
          movies.length == 0 ? (
            <NotFound
              title="Browse now, watch later"
              desc="Your Favorite list is empty"
            />
          ) : (
            <></>
          )
        }
      />
    </SafeAreaView>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: { flexGrow: 1 },
});
