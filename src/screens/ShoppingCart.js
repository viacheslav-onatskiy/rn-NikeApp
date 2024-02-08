import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import CartListItem from "../components/CartListItem";
import {
  cartTotalPrice,
  selectDeliveryPrice,
  selectSubTotal,
} from "../store/cartSlice";

const ShoppingCartTotals = () => {
  const subTotal = useSelector(selectSubTotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const totalPrice = useSelector(cartTotalPrice);

  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subTotal} US$</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{deliveryFee} US$</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{totalPrice} US$</Text>
      </View>
    </View>
  );
};

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "lightgray",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    color: "gray",
    fontSize: 16,
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
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

export default ShoppingCart;
