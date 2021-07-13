import React from 'react';
import { View, Text } from 'react-native';

const CenterText = ({ text, color }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: color }}>
      <Text style={{ color: '#000', fontSize: 40 }}>{text}</Text>
    </View>
  );
}
export default CenterText;