// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
// import { LinearGradient } from 'expo-linear-gradient';
// import { fetchProducts } from '../../services/redux_2/FetchProducts';

// const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];

// const DemoApp = () => {
//   const dispatch = useDispatch();
//   const { data, isLoader, isError } = useSelector(state => state.product);
//   const [displayedCategoryIndex, setDisplayedCategoryIndex] = useState(0);

//   useEffect(() => {
//     const fetchProductsForCurrentCategory = async () => {
//       const category = categories[displayedCategoryIndex];
//       await dispatch(fetchProducts(category));
//     };

//     fetchProductsForCurrentCategory();

//     const interval = setInterval(() => {
//       setDisplayedCategoryIndex(prevIndex => (prevIndex + 1) % categories.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [dispatch, displayedCategoryIndex]);

//   const handleCategorySelect = (index) => {
//     setDisplayedCategoryIndex(index);
//   };

//   const renderShimmerPlaceholder = (height, width) => (
//     <ShimmerPlaceholder
//       style={{ height, width }}
//       LinearGradient={LinearGradient}
//       visible={!isLoader}
//       duration={1000}
//     />
//   );

//   return (
//     <View style={styles.container}>
//       {data && data.length > 0 ? (
//         <FlatList
//           data={data}
//           renderItem={({ item }) => (
//             <View style={styles.item}>
//               {renderShimmerPlaceholder(16, '80%')} 
//               <Text style={styles.categoryText}>Category: {item.category}</Text>
//               {renderShimmerPlaceholder(20, '100%')} 
//               <Text style={styles.title}>{item.title}</Text>
//               {renderShimmerPlaceholder(16, '50%')} 
//               <Text>{item.description}</Text>
//               <View style={styles.imageContainer}>
//                 {renderShimmerPlaceholder(100, '100%')} 
//                 <Image source={{ uri: item.image }} style={styles.image} />
//               </View>
//               {renderShimmerPlaceholder(16, '30%')} 
//               <Text>Price: ${item.price}</Text>
//             </View>
//           )}
//           keyExtractor={item => item.id.toString()}
//         />
//       ) : (
//         <Text>No data available</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 16,
//     paddingTop: 16,
//     marginBottom:10,
    
   
//   },
//   item: {
//     marginBottom: 16,
//     borderRadius: 8,
//     backgroundColor: '#f0f0f0',
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 2,
//     elevation: 2,
    
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   imageContainer: {
//     width: '100%', 
//     height: 100, 
//     borderRadius: 8,
//     overflow: 'hidden', 
//     marginBottom: 8,
//   },
//   image: {
//     width: '100%', 
//     height: '100%', 
//     resizeMode: 'cover', 
//   },
//   categoryText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000',
//     marginBottom: 8,
//   },
// });

// export default DemoApp;



import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';
import { fetchProducts } from '../../services/redux_2/FetchProducts';

const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];

const DemoApp = () => {
  const dispatch = useDispatch();
  const { data, isLoader, isError } = useSelector(state => state.product);
  const [displayedCategoryIndex, setDisplayedCategoryIndex] = useState(0);
  const [showShimmer, setShowShimmer] = useState(true);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    const fetchProductsForCurrentCategory = async () => {
      const category = categories[displayedCategoryIndex];
      setShowShimmer(true); 
      setShowData(false); 

      await new Promise(resolve => setTimeout(resolve, 5000));

      await dispatch(fetchProducts(category)); 
      setShowShimmer(false); 
      setShowData(true); 
    };

    fetchProductsForCurrentCategory();

    const interval = setInterval(() => {
      setDisplayedCategoryIndex(prevIndex => (prevIndex + 1) % categories.length);
    }, 10000); 

    return () => clearInterval(interval);
  }, [dispatch, displayedCategoryIndex]);

  const handleCategorySelect = (index) => {
    setDisplayedCategoryIndex(index);
  };

  const renderShimmerPlaceholder = () => (
    <ShimmerPlaceholder
      style={{ flex: 1, backgroundColor: '#f0f0f0' }}
      LinearGradient={LinearGradient}
      duration={1000}
    />
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <View style={styles.imageContainer}>
        {isLoader && renderShimmerPlaceholder()}
        {showData && <Image source={{ uri: item.image }} style={styles.image} />}
      </View>
      <View style={styles.textContainer}>
        {isLoader && renderShimmerPlaceholder()}
        {showData && <Text style={styles.categoryText}>Category: {item.category}</Text>}
        {isLoader && renderShimmerPlaceholder()}
        {showData && <Text style={styles.title}>{item.title}</Text>}
        {isLoader && renderShimmerPlaceholder()}
        {showData && <Text numberOfLines={2} style={styles.description}>{item.description}</Text>}
        {showShimmer && renderShimmerPlaceholder()}
        {showData && <Text style={styles.price}>Price: ${item.price}</Text>}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {showShimmer ? (
        <FlatList
          data={[{ id: 'shimmer1' }, { id: 'shimmer2' }, { id: 'shimmer3' }, { id: 'shimmer4' }, { id: 'shimmer5' }]}
          renderItem={() => (
            <View style={styles.item}>
              {renderShimmerPlaceholder()}
              <View style={styles.imageContainer} />
              <View style={styles.textContainer}>
                {renderShimmerPlaceholder()}
                <View style={styles.shimmerText} />
                {renderShimmerPlaceholder()}
                <View style={styles.shimmerTitle} />
                {renderShimmerPlaceholder()}
                <View style={styles.shimmerDescription} />
                {renderShimmerPlaceholder()}
                <View style={styles.shimmerPrice} />
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ paddingBottom: 16 }}
        />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 16 }}
        />
      )}
      {!showShimmer && !data.length && (
        <Text style={styles.noDataText}>No data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#f0f0f0',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  imageContainer: {
    marginLeft: 8,
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
  textContainer: {
    flex: 1,
    padding: 12,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  description: {
    fontSize: 14,
    marginBottom: 4,
    color: '#666',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
  noDataText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
  shimmerText: {
    width: '70%',
    height: 16,
    marginBottom: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
  shimmerTitle: {
    width: '90%',
    height: 24,
    marginBottom: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
  shimmerDescription: {
    width: '80%',
    height: 36,
    marginBottom: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
  shimmerPrice: {
    width: '40%',
    height: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
});

export default DemoApp;
