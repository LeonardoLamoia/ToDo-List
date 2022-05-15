import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export type EditTaskArgs = {
  taskId: number;
  taskNewTitle: string
}
export function Home() {
  setTasks(updatedTasks)
}

function handleEditTask({taskId, taskNewTitle}: EditTaskArgs){
  const updatedTasks = tasks.map(task => ({...task}))

const task = updatedTasks.find(task => task.id === taskId)
export function Home() {


function handleRemoveTask(id: number) {
  Alert.alert('Remover item', 'Tem certeza que você deseja remover esse item?',
      [
        {
          text: "Não",
          onPress:()=> console.log()
        },

      {
        text: "Sim",
        onPress:()=> setTasks(oldTasks => oldTasks.filter(task => task.id !== id))
      }
  ])

}

return (
      tasks={tasks} 
      toggleTaskDone={handleToggleTaskDone}
      removeTask={handleRemoveTask} 
      editTask={handleEditTask}
    />
  </View>
)