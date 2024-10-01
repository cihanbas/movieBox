import MovieItem from '@components/ListItem';
import NotFound from '@components/NotFound';
import { SearchInput } from '@components/SearchInput';
import MovieLoader from '@components/Skeleton/movie';
import { useInfiniteQuery } from '@tanstack/react-query';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IBottomCompositeScreenProps } from 'src/navigation/types';
import { api } from 'src/services/api';
import { Movie } from 'src/services/types/Movie';
import { useAppSelector } from 'src/store/hooks';
interface Props extends IBottomCompositeScreenProps<'Search'> {}

const SearchScreen: FC<Props> = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const { year } = useAppSelector((s) => s.searchSlice);
  const { data, isPending, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['search', query, year],
    queryFn: async ({ pageParam = 1 }) =>
      (await api.search(pageParam, query, year)).data,
    getNextPageParam: (lastPage) => {
      if (lastPage.total_pages > lastPage.page) {
        return lastPage.page + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });
  const dataArr = useMemo(
    () => data?.pages.map((p) => p.results).flat(),
    [data],
  );
  const onSearch = (q: string) => {
    setQuery(q);
  };

  const onPressFilter = () => {
    navigation.navigate('Filter');
  };
  const handleMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };
  const navigateToDetail = (id: number) => {
    navigation.navigate('MovieDetail', { movieID: id });
  };
  const renderItem: ListRenderItem<Movie> = useCallback(
    ({ item }) => (
      <MovieItem item={item} onPress={() => navigateToDetail(item.id)} />
    ),
    [],
  );
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <SearchInput onChangeText={onSearch} onPressFilter={onPressFilter} />
      {isPending && <MovieLoader />}
      {!isPending && data?.pages[0].total_results == 0 && query.length > 0 && (
        <NotFound />
      )}
      <FlatList
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
        data={dataArr || []}
        numColumns={2}
        contentContainerStyle={styles.contentContainer}
        onEndReached={handleMore}
        onEndReachedThreshold={1}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: { flexGrow: 1, padding: 8 },
});
