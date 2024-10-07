

import { useState } from 'react';
import { View, SafeAreaView, Button, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {

  const [backgroundColor, setBackgroundColor] = useState<string>('white');
  const [title, setTitle] = useState<string>('Click Me'); 
  const [text, setText] = useState<String>('Change Background')

  const toggleBackgroundColor = () => {

    if (backgroundColor === 'white') {
      setBackgroundColor('yellow');
      setTitle('BackGround ON'); 
      setText('Background is changed')
    } else {
      setBackgroundColor('white');
      setTitle('Click Me');
      setText('Change Background')
    }
  };

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: backgroundColor }}>
      <View style={styles.centerContainer}>
        <Text style={styles.centerText}>{text}</Text>
        <Button title={title} onPress={toggleBackgroundColor} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 20,
    padding: 20
  },
});
