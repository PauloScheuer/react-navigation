import React from 'react';
import { SafeAreaView, Button } from 'react-native';
import CenterText from '../components/CenterText';

const PageOne = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }} >
      {navigation.toggleDrawer ?
        <Button title="toggle" onPress={() => navigation.toggleDrawer()} />
        :
        <Button title="next" onPress={() => navigation.navigate('PageTwo', { name: 'Page Two' })} />
      }
      <CenterText text="Page One" color="#f55" />
    </SafeAreaView>
  );
}
export default PageOne;