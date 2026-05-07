import {Pressable, StyleSheet, Text, TextInput, View, useColorScheme } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

const posts = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  return (
    <SafeAreaView className="flex-1 dark:bg-black bg-white">
      <View className='flex-1 px-2 dark:bg-black'>
      <TextInput
       placeholder="What's on your mind?"
       placeholderTextColor="#888"
       className='text-white p-4 mt-2 rounded-2xl border border-zinc-700'
      />
      <Pressable
      className='bg-white mt-4 p-4 rounded-xl'
      >
        <Text className='text-black text-xl text-center font-bold'>
          Post
        </Text>
      </Pressable>
    </View>
    </SafeAreaView>
    
  )
}

export default posts

const styles = StyleSheet.create({})