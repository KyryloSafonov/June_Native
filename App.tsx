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
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [users, setUsers] = useState<any[]>([]);
  const fetchUsers = () =>
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(json => setUsers(json));

  const hideUsers = () => setUsers([]);

  console.log(users);
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
});

export default App;
