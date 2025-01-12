import { useState, useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, TextInput } from 'react-native';

import { Feather } from '@expo/vector-icons'
import Product from '../../components/Product'
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../../contexts/CartContext'

export default function Cart() {
  const { cart, addItemCart, products, addProduct, removeProduct } = useContext(CartContext)
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const navigation = useNavigation();

  function handleAddCart(item) {
    addItemCart(item)
  }

  function handleAddProduct() {
    addProduct(newProductName, newProductPrice);
    setNewProductName("");
    setNewProductPrice("");
  }

  return (
    <SafeAreaView style={s.container}>
      <View style={s.cartContent}>
        <Text style={s.title}> Lista de Produtos</Text>

        <TouchableOpacity
          style={s.cartButton}
          onPress={() => navigation.navigate('Cart')}
        >
          {cart.length >= 1 && (
            <View style={s.dot}>
              <Text style={s.dotText}>
                {cart?.length}
              </Text>
            </View>
          )}
          <Feather name="shopping-cart" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      <FlatList
        style={s.list}
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Product data={item} addToCart={() => handleAddCart(item)} />}
      />

        {/* Começa aqui */}
        <View style={s.inputContainer}>
          <TextInput
            style={s.input}
            placeholder="Nome"
            value={newProductName}
            onChangeText={setNewProductName}
          />
          <TextInput
            style={s.input}
            placeholder="Preço"
            keyboardType="numeric"
            value={newProductPrice}
            onChangeText={setNewProductPrice}
          />
          <TouchableOpacity style={s.addButton} onPress={handleAddProduct}>
            <Text style={s.addButtonText}>Adicionar</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingEnd: 14,
    paddingStart: 14,
  },

  cartContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  dot: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    height: 20,
    width: 20,
    borderRadius: 12,
    position: 'absolute',
    zIndex: 99,
    bottom: -2,
    left: -4,
  },

  dotText: {
    fontSize: 12,
    color: '#fafafa'
  },

  inputContainer: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
    marginRight: 8,
  },

  addButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },

  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
})