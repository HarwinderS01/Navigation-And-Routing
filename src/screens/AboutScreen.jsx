// src/screens/AboutScreen.jsx
import React from 'react';
import { View, Text, StyleSheet, Alert, Pressable } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const handleNamePress = () => {
    Alert.alert('Easter Egg!', 'You found the hidden message!');
  };

  return (
    <MainLayout>
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.subtitle}>Name: To-Do List App</Text>
      <Pressable onPress={handleNamePress}>
        <Text style={styles.name}>Your Name: John Doe</Text>
      </Pressable>
      <Text>Date: {new Date().toDateString()}</Text>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
});

export default AboutScreen;
