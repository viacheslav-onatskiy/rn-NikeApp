import { FlatList, Image, Pressable, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { productsSlice } from '../store/productsSlice';

const ProductsScreen = ({ navigation }) => {
  // const navigation = useNavigation();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            dispatch(productsSlice.actions.setSelectedProduct(item.id));

            navigation.navigate('Product Details');
          }}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  itemContainer: {
    width: '50%',
    padding: 1,
  },
  name: {
    alignSelf: 'center',
    marginTop: 7,
  },
  price: {
    alignSelf: 'center',
    fontWeight: '500',
    marginTop: 5,
    marginBottom: 7,
  },
});

export default ProductsScreen;
