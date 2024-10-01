import { colors } from '@assets/theme/Colors';
import MovieItem from '@components/ListItem';
import PaginationLoader from '@components/Loading/PaginationLoader';
import Text from '@components/Text';
import { useInfiniteQuery } from '@tanstack/react-query';
import * as SplashScreen from 'expo-splash-screen';
import React, { FC, useCallback, useMemo } from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IBottomCompositeScreenProps } from 'src/navigation/types';
import { api } from 'src/services/api';
import { Movie } from 'src/services/types/Movie';

interface Props extends IBottomCompositeScreenProps<'Home'> {}
const HomeScreen: FC<Props> = ({ navigation }) => {
  const { data, isPending, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['populer'],
    queryFn: async ({ pageParam = 1 }) => (await api.movieList(pageParam)).data,
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

  const onLayoutRootView = React.useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

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
    <SafeAreaView
      style={styles.container}
      edges={['top']}
      onLayout={onLayoutRootView}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>MovieBox</Text>
      </View>

      <FlatList
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
        data={dataArr}
        numColumns={2}
        contentContainerStyle={styles.contentContainer}
        onEndReached={handleMore}
        onEndReachedThreshold={1}
      />
      <PaginationLoader visible={isPending} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: { flexGrow: 1, padding: 8 },
  header: {
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
  },
  headerText: {
    color: colors.primary,
    fontSize: 24,
  },
});
