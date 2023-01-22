import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from './styles'

// Aca pongo en general las propiedades que recibe la funcion para que funcione
// Esto se recibe como propiedad porque dependiendo de la vista( no se del tamaño de la pantalla,etc) vamos a tener una
// logica distinta

const AddItem = ({ 
    placeholder, 
    task, 
    onHandlerChange, 
    buttonText, 
    buttonColor, 
    onHandlerSubmit
}) => {
    return (
        <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder={placeholder}
          autoComplete='off'
          autoCorrect={false}
          autoCapitalize='none'
          value={task}
          onChangeText={onHandlerChange}
        />
        <Button disabled={!task} title={buttonText}  color={buttonColor} onPress={onHandlerSubmit} />
      </View>
    )
}

export default AddItem;