import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { article } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: article.urlToImage }} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.description}>{article.content}</Text>
      <Text style={styles.publishedAt}>{article.publishedAt}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
  publishedAt: {
    fontSize: 12,
    color: '#888',
  },
  image: {
    height: 200,
  },
});
