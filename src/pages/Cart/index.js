import { FlatList, StyleSheet, Text, View } from 'react-native';

import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext'

import CardItem from '../../components/CardItem';

export default function Cart() {
  const { cart, addItemCart, removeItemCart } = useContext(CartContext)

  return (
    <View style={s.container}>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={ (item) => String(item.id)}
        ListEmptyComponent={() => <Text>Nenhum item no carrinho...</Text>}
        renderItem={ ({item}) => (
          <CardItem 
            data={item}
            addAmount={ () => addItemCart(item)}
            removeAmount={ () => removeItemCart(item)}
          />
        )}
      />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingHorizontal: 14,
    paddingVertical: 14

  }
})