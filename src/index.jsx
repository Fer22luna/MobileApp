import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { AddItem, CustomModal, TaskList } from './components';
import { colors } from './constants/theme/colors';


const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null); // cuado apretemos la tarea necesito que se abra el modal

  const onHandlerChange = (text) => {
    setTask(text)
  }

  const onHandlerSubmit = () => {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(),
        value: task
      }
    ]);
    setTask('');
  }

  // Aca o le paso el id o le paso todo el item, aca pasamos el item en si para settearlo, 
  // Aca reicbimos el item lo seteamos como la tarea seleccionada, y cuando lo clickeamos mostramos el modal
  // invirtiendo el estado actual pasamos de falso a verdadero
  const onHandlerModal = (item) => {
    setIsModalVisible(!isModalVisible) // aca me lo pasa de false a true
    setSelectedTask(item);
  }
  
  const onHandleCancel = () => {
    setIsModalVisible(!isModalVisible);
    setSelectedTask(null);
  }

  const onHandleDelete = () => {
    setTasks((prevTaskList) => prevTaskList.filter((task) => task.id !== selectedTask.id));
    setIsModalVisible(!isModalVisible);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.containerTitleText}> TO - DO LIST</Text>
      </View>
      <TaskList 
        tasks={tasks}
        onHandlerModal={onHandlerModal}
      />
            <AddItem 
        buttonColor={colors.primary}
        buttonText='+ Add'
        onHandlerChange={onHandlerChange}
        onHandlerSubmit={onHandlerSubmit}
        placeholder='add a new task'
        task={task}
      />
     <CustomModal 
        isModalVisible={isModalVisible}
        onHandleCancel={onHandleCancel}
        onHandleDelete={onHandleDelete}
        selectedTask={selectedTask}
     />
    </View>
  );
}


export default App;