import React from 'react';
import {View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Header from 'src/components/global/Header';
import s from './styles';

function DummyScreen() {
  return (
    <SafeAreaView style={s.container}>
      <View style={s.container}>
        <Header />
      </View>
    </SafeAreaView>
  );
}

export default DummyScreen;
