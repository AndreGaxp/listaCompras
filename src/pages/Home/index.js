import { useState, useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons'
import Product from '../../components/Product'
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../../contexts/CartContext'

export default function Cart() {
  const {cart} = useContext(CartContext)

  const navigation = useNavigation();
  const [products, setProducts] = useState([
    {
      id: '1',
      name: "Coca cola",
      price: 19.90
    },
    {
      id: '2',
      name: "Chocolate",
      price: 6.50
    },
    {
      id: '4',
      name: "Queijo 500g",
      price: 15
    },
    {
      id: '5',
      name: "Batata frita",
      price: 23.90
    },
    {
      id: '6',
      name: "Guarana lata",
      price: 6.00
    },
  ])

  return (
    <SafeAreaView style={s.container}>
      <View style={s.cartContent}>
        <Text style={s.title}> Lista de Produtos </Text>
        <TouchableOpacity
          style={s.cartButton}
          onPress={ () => navigation.navigate('Cart')}
        >
          <View style={s.dot}>
            <Text style={s.dotText}>
              {cart?.length}
            </Text>
          </View>
          <Feather name="shopping-cart" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      <FlatList
        style={s.list}
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Product data={item} />}
      />
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
  }
})