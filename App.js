import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import ItemTarea from "./components/ItemTarea";
import InputTarea from "./components/InputTarea";

export default function App() {
  const [tareasActuales, setTareasActuales] = useState([]);
  const [mostrarModoAgregar, setMostrarModoAgregar] = useState(false)

  const agregarTarea = (tareaIngresada) => {
    setTareasActuales([
      ...tareasActuales,
      { key: Math.random().toString(), value: tareaIngresada },
    ]);
    setMostrarModoAgregar(false)
  };

  const eliminarTarea = (id) => {
    setTareasActuales(tareasActuales => {
      return tareasActuales.filter(tarea => tarea.key !== id)
    })
  } 

  const cancelarAgregarTarea = () => {
    setMostrarModoAgregar(false)
  }

  return (
    <View style={styles.screen}>
      <Button title="Agregar nueva tarea" onPress={() => setMostrarModoAgregar(true)}/>
      <InputTarea agregarTarea={agregarTarea} visible={mostrarModoAgregar} onCancelar={cancelarAgregarTarea} />
      <FlatList
        data={tareasActuales}
        renderItem={(itemData) => <ItemTarea id={itemData.item.key} title={itemData.item.value} handleDeleteItem={eliminarTarea} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    paddingTop: 50,
  },
});
