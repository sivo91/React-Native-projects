import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <>
      <View>
        <Text style={styles.header}>Contact Page</Text>
      </View>

      <View> 
        
         <Link href={'/'} >
           <Pressable>
             <Text style={styles.linkText}>Back</Text>
           </Pressable>
          </Link>

      </View>

      
    </>
  )
}

export default Index

const styles = StyleSheet.create({

  header: {
    textAlign: 'center',
    margin: 30,
    fontSize: 32
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
