import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ItemTarea = ({title, handleDeleteItem, id}) => {
  return (
    <TouchableOpacity onPress={() => handleDeleteItem(id)}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles= StyleSheet.create({
    listItem: {
        padding: 10,
        margin: 10,
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWitdh: 1,
      },
})

export default ItemTarea;
