/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  const fetchUsers = () =>
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(json => setUsers(json));

  const fetchPosts = () =>
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json())
      .then(json => setPosts(json));

  const hideUsers = () => setUsers([]);
  const hidePosts = () => setPosts([]);

  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <Text key={`item-${index}`}>
        {item.id} ---- {item.title}
      </Text>
    );
  };

  const hideAll = () => {
    setPosts([]);
    setUsers([]);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerItem}>
            {!users.length ? (
              <Button onPress={fetchUsers} title={'Get users'} />
            ) : (
              <Button onPress={hideUsers} title={'Hide users'} />
            )}
          </View>
          {!!users.length && <Text style={styles.title}>Users</Text>}
        </View>
        {!!users.length &&
          users.map((item: any, index: number) => {
            return (
              <Text key={`item-${index}`}>
                {item.name} --- {item.username}
              </Text>
            );
          })}
      </View>
      <View style={styles.headerItem}>
        {!posts.length ? (
          <Button onPress={fetchPosts} title={'Get posts'} />
        ) : (
          <Button onPress={hidePosts} title={'Hide posts'} />
        )}
      </View>
      <View>
        {!!posts.length && (
          <FlatList
            style={styles.flatList}
            data={posts}
            renderItem={renderItem}
          />
        )}
      </View>
      <View>
        <TouchableOpacity onLongPress={hideAll} style={styles.button}>
          <Text>Hide all</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 15,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerItem: {
    width: '40%',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  flatList: {
    height: 500,
  },
  button: {
    alignItems: 'center',
    width: '40%',
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
    backgroundColor: '#64A6FA',
  },
});

export default App;
