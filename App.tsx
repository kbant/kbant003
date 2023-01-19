import React from 'react';
import {Text, View} from 'react-native';
import MyButton from './src/components/Button/Button';

export default function App() {
  return (
    <View className="items-center justify-center flex-1">
      <Text className="mt-2 mb-10 text-xl font-extrabold leading-5 text-right uppercase text-primary-light decoration-double text-md">
        Open up App.js to start working on your app!
      </Text>
      <MyButton variant="primary">This text will be bold</MyButton>
    </View>
  );
}
