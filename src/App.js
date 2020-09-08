/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import NavigationContainer from 'src/navigators';
import store from 'src/store';

function App() {
  return (
    <SafeAreaProvider>
        <Provider store={store}>
        <NavigationContainer />
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
