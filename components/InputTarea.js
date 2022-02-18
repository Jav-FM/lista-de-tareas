import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const InputTarea = ({agregarTarea, visible, onCancelar}) => {
  const [tareaIngresada, setTareaIngresada] = useState('');

  const handleTareaIngresada = textoIngresado => {
    setTareaIngresada(textoIngresado);
  };

  const handleAgregarTarea = () => {
    agregarTarea(tareaIngresada);
    setTareaIngresada('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Escribe una tarea"
          style={styles.input}
          onChangeText={handleTareaIngresada}
          value={tareaIngresada}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancelar" color="red" onPress={onCancelar} />
          </View>
          <View style={styles.button}>
            <Button title="Agregar" onPress={handleAgregarTarea} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 20,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  button: {
    width: "45%"
  }
});

export default InputTarea;
