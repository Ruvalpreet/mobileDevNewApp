import React from 'react';
import {SafeAreaView, Button} from 'react-native';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import MainLayout from '../layouts/MainLayout';

export default function HomeScreen({navigation}) {
  const [items, setItems] = React.useState([
    'Do Laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addItem = item => {
    setItems([...items, item]);
  };

  return (
    <MainLayout>
      <SafeAreaView>
        <ToDoList items={items} />
        <ToDoForm addItem={addItem} />
        <Button title="About" onPress={() => navigation.navigate('About')} />
      </SafeAreaView>
    </MainLayout>
  );
}
