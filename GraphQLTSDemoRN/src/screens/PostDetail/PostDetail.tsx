/*
 * Created by IntelliJ IDEA.
 * User: kavin
 * Date: Thu Jul 30 2020
 * Time: 14:09
 */
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const PostDetail = () => {

  const navigation = useNavigation();

  useEffect(() => {

  },);

  return (
    <View style={styles.mainContainer}>

    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {}
});

export default PostDetail;
