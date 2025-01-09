import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CardItem({ data, addAmount, removeAmount }) {
  const [amount, setAmount] = useState(data?.amount)

  function handleIncrease(){
    addAmount();
    setAmount(item => item + 1)
  }

  function handleDecrease(){
    removeAmount()

    if(amount === 0){
      setAmount(0);
      return;
    }

    setAmount(item => item - 1)
  }
  
  return (
    <View style={s.container}>
      <View>
        <Text style={s.title}>{data.name}</Text>
        <Text style={s.price}>R$ {data.price}</Text>
      </View>

      <View style={s.amountContainer}>
        <TouchableOpacity style={s.buttonAdd} onPress={handleDecrease}>
          <Text> - </Text>
        </TouchableOpacity>

        <Text style={s.amount}>{amount}</Text>

        <TouchableOpacity style={s.buttonAdd} onPress={handleIncrease}>
          <Text> + </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#dfdfdf',
    borderRadius: 5,
    marginBottom: 14,
    padding: 8,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  price: {
    fontSize: 16,
  },

  amountContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },

  buttonAdd: {
    backgroundColor: 'green',
    padding: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },

  amount: {
    marginHorizontal: 14,
  }
})