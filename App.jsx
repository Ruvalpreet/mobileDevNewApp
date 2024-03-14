/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
  const [items, setItems] = React.useState([
    'Do Laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addItem = item => {
    setItems([...items, item]);
  };

  return (
    <SafeAreaView>
      <ToDoList items={items} />
      <ToDoForm addItem={addItem} />
    </SafeAreaView>
  );
}
export default App;
