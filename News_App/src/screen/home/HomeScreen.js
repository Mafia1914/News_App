import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';

import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);



  useEffect(() => {
    fetchArticles();
  }, []);

  const checkInternetConnectivity = async () => {
    const state = await NetInfo.fetch();
    return state.isConnected;
  };

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Error storing data:', e);
    }
  };

  const retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value != null ? JSON.parse(value) : null;
    } catch (e) {
      console.error('Error retrieving data:', e);
      return null;
    }
  };

  const fetchArticles = async () => {
    if (isFetching) return;
    setIsFetching(true);
    setLoading(true);
  
    try {
      const isConnected = await checkInternetConnectivity();
  
      if (isConnected) {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=tesla&from=2024-06-11&sortBy=publishedAt&apiKey=c06195acde2b4d15be2a26ed2283bca7&page=${currentPage}`
        );
        const newArticles = response.data.articles;
        setArticles(prevArticles => [...prevArticles, ...newArticles]);
        storeData('cachedArticles', [...articles, ...newArticles]); 
      } else {
        const cachedArticles = await retrieveData('cachedArticles');
        if (cachedArticles) {
          setArticles(cachedArticles);
        } else {
          Alert.alert('No Internet Connection', 'Unable to fetch new articles. Please check your internet connection.');
        }
      }
  
      setLoading(false);
      setCurrentPage(currentPage + 1);
    } catch (error) {
      console.error('Error fetching articles:', error);
      setLoading(false);
    } finally {
      setIsFetching(false);
    }
  };
  

  const handlePress = (article) => {
    navigation.navigate('DetailsScreen', { article });
  };

  const renderFooter = () => {
    if (!loading) return null;
    if (articles.length < 3) return null;
    return (
      <View style={{ height: 40, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
            <Image source={{ uri: item.urlToImage }} style={styles.image} resizeMode="cover" />
            <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.publishedAt}>{item.publishedAt}</Text>
            </View>
          </TouchableOpacity>
        )}
        onEndReached={fetchArticles}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  card: {
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    height: 200,
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
  },
  publishedAt: {
    fontSize: 12,
    color: '#888',
  },
});
