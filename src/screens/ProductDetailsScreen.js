import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const ProductDetailsScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct);

  if (!product) return;
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartSlice.actions.addCartItem({ product }));
  };

  return (
    <View>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width: width, aspectRatio: 1 }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>

          {/* Price */}
          <Text style={styles.price}>${product.price}</Text>

          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      {/* Add to cart button */}
      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 2,
  },
  description: {
    fontSize: 18,
    fontWeight: "300",
    marginVertical: 10,
    lineHeight: 30,
  },

  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
  },
  buttonText: {
    color: "lightgrey",
    fontWeight: "500",
    fontSize: 17,
  },
});

export default ProductDetailsScreen;
