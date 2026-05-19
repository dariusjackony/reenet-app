import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import { Ionicons, FontAwesome, AntDesign  } from "@expo/vector-icons";

const signup = () => {
  return (
    <SafeAreaView className='flex-1 bg-black'>
      <StatusBar style='light' />
        <View className="flex-1 bg-black justify-center px-6">

      <Text className="text-white text-5xl font-bold mb-4">
        Create Account
      </Text>
      <Text className='text-white mb-8 text-xl'>
         Start sharing your thoughts with the world
      </Text>

      <View className="flex-row items-center bg-[#111] rounded-xl px-3 mb-3">
      <Ionicons name="person-outline" size={20} color="#888" />
      <TextInput
         placeholder="Username"
         placeholderTextColor="#888"
         className="flex-1 text-white p-4"
      />
      </View>

      <View className='flex-row items-center bg-[#111] rounded-xl px-3 mb-3'>
         <Ionicons name="mail-outline" size={20} color="#888" />
         <TextInput
         placeholder="Email"
         placeholderTextColor="#888"
         className="flex-1 text-white p-4 rounded-xl "
         />
      </View>
      
      <View className='flex-row items-center bg-[#111] rounded-xl px-3 mb-3'>
         <Ionicons name="key-outline" size={20} color="#888" />
         <TextInput
         placeholder="Password"
         placeholderTextColor="#888"
         secureTextEntry
         className="flex-1 text-white p-4 rounded-xl "
         />
      </View>
      

      <TouchableOpacity className="bg-white p-4 rounded-xl mt-2">
        <Text className="text-center font-bold">
          Sign Up
        </Text>
      </TouchableOpacity>
      <View className="flex-row items-center my-6">
         <View className="flex-1 h-[1px] bg-gray-700" />
            <Text className="text-gray-400 mx-3 text-sm">
               OR
            </Text>
         <View className="flex-1 h-[1px] bg-gray-700" />
      </View>
      <View className='flex-row justify-center  gap-10'>
         <TouchableOpacity>
            <FontAwesome name='google' size={30} color='white' />
         </TouchableOpacity>
         <TouchableOpacity>
            <FontAwesome name='facebook' size={30} color='white' />
         </TouchableOpacity>
         <TouchableOpacity>
            <FontAwesome name='apple' size={30} color='white' />
         </TouchableOpacity>
      </View>
      <TouchableOpacity
        className="mt-5"
        onPress={() => navigation.navigate("Login")}
      >
        <Text className="text-gray-400 text-center">
          Already have an account? Login
        </Text>
      </TouchableOpacity>

    </View>
     </SafeAreaView>
  )
}

export default signup