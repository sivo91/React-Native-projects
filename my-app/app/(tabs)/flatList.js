

import { StyleSheet, Text, View, Image, Pressable, Platform, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { Link } from 'expo-router';
import img from '../../assets/images/favicon.png'; // Fallback image

import { data } from '../../constants/ListData';

const Index = () => {
  const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;
  console.log(data);

  const headerCompp = <Text>Top of List</Text>;
  const FooterCompp = <Text>End of List</Text>;

  const separatorComp = <View style={styles.separator} />;

  // Check if image exists
  const getImageSource = (imageUri) => {
    return imageUri ? { uri: imageUri } : img;
  };

  return (
    <>
      <View>
        <Text style={styles.header}>Flat List</Text>
      </View>

      <View>
        <Link href={'/'}>
          <Pressable>
            <Text style={styles.linkText}>Back</Text>
          </Pressable>
        </Link>
      </View>

      <Container style={{ flex: 1 }}>
        <FlatList
          data={data}

          ListHeaderComponent={headerCompp}
          ListFooterComponent={FooterCompp}

          showsVerticalScrollIndicator={true} // scroll

          ItemSeparatorComponent={separatorComp}

          keyExtractor={(item) => item.id.toString()}

          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              
              <Image
                source={getImageSource(item.image)}
                style={styles.image}
              />
            </View>
          )}
        />
      </Container>
    </>
  );
};

export default Index;

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    margin: 30,
    fontSize: 32,
  },
  linkText: {
    marginTop: 20,
    fontSize: 16,
    color: 'white',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 7,
  },
  itemContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    alignItems: 'center', // Centers items horizontally
    justifyContent: 'center', // Centers items vertically
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', // Centers text within Text component
  },
  itemDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center', // Centers text within Text component
  },
  separator: {
    height: 1,
    backgroundColor: 'blue',
    alignSelf: 'center',
    width: '50%',
    maxWidth: 300,
    marginVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 10,
    borderRadius: 5,
  },
});

