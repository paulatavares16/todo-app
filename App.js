import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainPage from './screens/MainPage';
import HistoryPage from './screens/HistoryPage';

const Tab = createBottomTabNavigator();

export const useTasksStore = create(
  persist(
    (set) => ({
      tasks: [],
      increaseTasks: (item) => set((state) => ({ tasks: [...state.tasks, item] })),
      changeTaskState: (item) => set((state) => ({ tasks: state.tasks.map((i) => item !== i.text ? i : {text: item, unDone: false, created: i.created})})),
    }),
    {
      name: 'tasks-todos',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
  )

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="TODO List">
      <Tab.Screen 
        name="TODO List" 
        component={MainPage}
        options={{
          tabBarLabel: 'TODO',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list-ul" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="History" 
        component={HistoryPage}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="history" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
          <MyTabs />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
