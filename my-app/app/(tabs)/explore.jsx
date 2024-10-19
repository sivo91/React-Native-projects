
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Explore Page</Text>

      
         <Link href={'/'} >
           <Pressable>
             <Text style={styles.linkText}>Back</Text>
           </Pressable>
          </Link>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  linkText: {
    marginTop: 20,
    fontSize: 16,
    color: 'white',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 7
  },
});
