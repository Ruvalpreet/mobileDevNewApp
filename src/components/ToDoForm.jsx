import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import tasks from '../data/task';

function ToDoForm({addItem}) {
  const [randomNumber, setRandomNumber] = React.useState(0);

  const handleAddTask = () => {
    setRandomNumber(Math.floor(Math.random() * 9));

    addItem(tasks[randomNumber]);
  };
  const [taskText, setTaskText] = React.useState('');
  return (
    <>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={text => setTaskText(text)}
          value={taskText}
        />
        <Button title="Add" onPress={() => addItem(taskText)} />

        <Button title="Generate Random task" onPress={handleAddTask} />
      </View>
    </>
  );
}

export default ToDoForm;

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});
