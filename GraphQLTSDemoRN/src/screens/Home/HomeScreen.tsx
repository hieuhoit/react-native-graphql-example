/*
 * Created by IntelliJ IDEA.
 * User: kavin
 * Date: Wed Jul 29 2020
 * Time: 19:14
 */

import React, {useEffect} from 'react';
import {FlatList, RefreshControl, SafeAreaView, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const HomeScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {

  },);

  return (
    <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
      <Header title={'Posts'} />
      <FlatList
        refreshControl={
          <RefreshControl
            colors={[colors.primary]}
            tintColor={colors.primary}
            refreshing={refreshing}
            onRefresh={() => {}}
          />
        }
        data={posts}
        keyExtractor={(item, index) => item.id}
        renderItem={({item, index}) => (
          <PostItem
            image={item.image}
            title={item.title}
            description={item.description}
            onPress={() => navigation.navigate('PostDetail')}>
            <ProfileAuthor
              image={item.authorImage}
              name={item.name}
              description={item.detail}
              style={{paddingHorizontal: 20}}
            />
          </PostItem>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {}
});

export default HomeScreen;
