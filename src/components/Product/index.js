import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Product({ data }) {
  return (
    <View style={s.container}>
      <View>
        <Text style={s.title}> {data.name} </Text>
        <Text style={s.price}> R$ {data.price}</Text>
      </View>
      <TouchableOpacity style={s.buttonAdd}>
        <Text style={s.buttonText}> + </Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#DFDFDF",
    borderRadius: 5,
    marginBottom: 14,
    padding: 8,
    paddingBottom: 14,
    paddingTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  title:{
    fontWeight: 'bold'
  },

  buttonAdd:{
    paddingStart: 12,
    paddingEnd: 12,
    backgroundColor: 'green',
    paddingVertical: 6,
    borderRadius: 5
  }
})