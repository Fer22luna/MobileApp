import React from "react";
import { TouchableOpacity, Text } from 'react-native'
import { styles } from "./styles";
import Checkbox from 'expo-checkbox';
import { useState } from "react";


const TaskItem = ({ item, onHandlerModal }) => {

const [isChecked,setIsChecked] = useState(false)





  return (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerModal(item)}>
       <Checkbox style={styles.checkbox} value={isChecked} disabled={false} onValueChange={() => setIsChecked(!isChecked)} color="#626893"  />
      <Text style={styles.itemList}>{item.value}</Text>
      {isChecked && <Text style={styles.checkTask}>TASK IS CHECK</Text>}
    </TouchableOpacity>
  )
}

export default TaskItem;