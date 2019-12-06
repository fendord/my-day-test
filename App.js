import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  NavigatorIOS,
  FlatList
} from 'react-native';

import Taskitem from './components/Taskitems';
import Taskinput from './components/Taskinputs';
import Header from './components/Header';
import Ender from './components/Ender';
export default function App() {
  const [myTasks, setMyTasks] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addTaskHandler = enteredTask => {
    if (enteredTask.length === 0){
      return;
    }
    setMyTasks(currentTasks => [
      ...currentTasks, 
      {id: Math.random().toString(), value: enteredTask}
    ]);
    setIsAddMode(false);
  };

const removeTaskHandler = taskId => {
  setMyTasks(currentTasks => {
    return currentTasks.filter((task) => task.id !==taskId);
  })
};

const cancelTaskAdditionHandler = () => {
  setIsAddMode(false);
};

  return (
    <View style={styles.screen}>
      <View>
        <Header title="The my day offline test"/>
      </View>
      <View style={styles.screen}>
        <Button title="Add New Task" color='#FF373C' onPress={() => setIsAddMode(true)} />
        <Taskinput visible={isAddMode} onAddTask={addTaskHandler} onCancel={cancelTaskAdditionHandler}/>
        <FlatList 
          key keyExtractor={(item, index) => item.id}
          data={myTasks} 
          renderItem={itemData => (
            <Taskitem 
              id={itemData.item.id} 
              onDelete={removeTaskHandler}
              title={itemData.item.value}
            />
          )}
        />
        
      </View>
      <View>
        <Ender title="Page end"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex:1,
  },

  title: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
