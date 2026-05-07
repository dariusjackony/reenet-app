import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Home, PlusSquare, Settings } from "lucide-react-native";

const _layout = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  return (
      <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? "#000" : "#fff",
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "rgba(255,255,255,0.5)",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="posts"
        options={{
          title: "Posts",
          tabBarIcon: ({ color, size }) => (
            <Home color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="createPosts"
        options={{
          title: "Create",
          tabBarIcon: ({ color, size }) => (
            <PlusSquare color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen 
      name="settings"
      options={{
        title: "Settings",
        tabBarIcon: ({color, size }) => (
          <Settings color={color} size={size} />
        ),
      }}
      />
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})