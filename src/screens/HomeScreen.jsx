// src/screens/HomeScreen.jsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';


const HomeScreen = ({ navigation }) => {
  return (
    <MainLayout>
      <Text>Welcome to the To-Do List App!</Text>
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
    </MainLayout>
  );
};

export default HomeScreen;
