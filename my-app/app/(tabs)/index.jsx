import { useState } from 'react';
import { View, SafeAreaView, Button, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {

  const [backgroundColor, setBackgroundColor] = useState('white');
  const [title, setTitle] = useState('Click Me'); 
  const [text, setText] = useState('Change Background');

  const toggleBackgroundColor = () => {
    if (backgroundColor === 'white') {
      setBackgroundColor('yellow');
      setTitle('Background ON'); 
      setText('Background is changed');
    } else {
      setBackgroundColor('white');
      setTitle('Click Me');
      setText('Change Background');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }}>
      <View style={styles.centerContainer}>
        <Text style={styles.centerText}>{text}</Text>
        <Button title={title} onPress={toggleBackgroundColor} />

        <Link href={'/explore'} style={styles.link}>
          Explore Page
        </Link>

        <Link href={'/contact'} style={styles.link}>
          Contact Page
        </Link>
      </View>

      {/* Layout */}
     {/*  <View style={{ backgroundColor: 'blue', flex: 1 }}></View>
      <View style={{ backgroundColor: 'red', flex: 1 }}></View>
      <View style={{ backgroundColor: 'pink', flex: 1 }}></View> */}
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
    padding: 20,
  },
  link: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    backgroundColor: 'black',
    color: 'white',
    fontSize: 18,  // Adjusted from 42 to better fit
    padding: 8,
    margin: 5,
    borderRadius: 7,
  },
});
