// src/components/ToDoForm.jsx
import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoForm = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Enter new task" />
      <Button title="Add Task" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default ToDoForm;
