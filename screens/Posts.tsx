import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {HomeRoutes, PostsRouteProps} from '../routes/HomeRoutes';

export const Posts = () => {
  const navigation = useNavigation<any>();
  const {params} = useRoute<PostsRouteProps<HomeRoutes.Posts>>();
  console.log(params.postId);
  return (
    <View>
      <Text>Posts screen</Text>
      <Button title={'Go back'} onPress={() => navigation.goBack()} />
      <Button
        title={'Go to tabs'}
        onPress={() => navigation.navigate(HomeRoutes.MainTab)}
      />
    </View>
  );
};
