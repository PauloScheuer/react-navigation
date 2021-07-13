import React from 'react';
import { SafeAreaView, Button } from 'react-native';
import CenterText from '../components/CenterText';

const PageTwo = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button title="previous" onPress={() => navigation.goBack()} />
      <Button title="next" onPress={() => navigation.navigate('PageThree')} />
      <CenterText text={route.params ? route.params.name : 'Page Two'} color="#5f5" />
    </SafeAreaView>
  );
}
export default PageTwo;