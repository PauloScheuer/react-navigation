import React from 'react';
import { SafeAreaView, Button } from 'react-native';
import CenterText from '../components/CenterText';

const PageThree = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button title="previous" onPress={() => navigation.goBack()} />
      <CenterText text="Page Three" color="#55f" />
    </SafeAreaView>
  );
}
export default PageThree;