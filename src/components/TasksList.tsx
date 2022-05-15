import React from 'react';
import { FlatList,  FlatListProps } from 'react-native';
import { EditTaskArgs } from '../pages/Home';

import { ItemWrapper } from './ItemWrapper';

import { TaskItem } from './TaskItem';

export interface Task {
  id: number;
}
export interface TasksListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  editTask: ({taskId, taskNewTitle}:EditTaskArgs) => void;
}

export function TasksList({ tasks, toggleTaskDone, removeTask, editTask }: TasksListProps) {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item, index }) => {
        return (
          <ItemWrapper index={index}>
            <TaskItem 
            task={item}
            toggleTaskDone={toggleTaskDone}
            removeTask={removeTask}
            editTask={editTask}
            />

</ItemWrapper>
        )
      }}/>)}