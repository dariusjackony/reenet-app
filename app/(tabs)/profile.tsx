import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
const profile = () => {
  const [user, setUser] = useState(null);
  const API_URL = process.env.EXPO_PUBLIC_API_URL

  useEffect(() => {
    const getProfile = async  () =>{
      try {
        const token = await AsyncStorage.getItem("access");
        const response = await axios.get(
          `${API_URL}/signals/my_profile`,
          {
            headers: {
              Authorization:`Bearer ${token}`
            },
          }
        );
        console.log("MY PROFILE", response.data)
      } catch(error:any){
        console.log("Profilee error:", error.response?.data || error.message)
      }
    };
   getProfile();
  }, []);

  return (
    <SafeAreaView className='flex-1 bg-black'>
      <StatusBar style='light' />
      <View className='px-4 mt-3'>
        <Ionicons name='chevron-back' size={25} color="white"/>
      </View>
      <View className="px-4 mt-10">
        <View className="flex-row items-center justify-between">
          <Image
            source={require("../../assets/images/pfp.jpeg")}
            className="w-20 h-20 rounded-full border-2 border-gray-700"
          />

          <View className="flex-row flex-1 justify-around ml-6">
            <View className="items-center">
              <Text className="text-white text-2xl font-bold text-base">48</Text>
              <Text className="text-gray-400 text-base">Posts</Text>
            </View>
            <View className="items-center">
              <Text className="text-white text-2xl font-bold text-base">100</Text>
              <Text className="text-gray-400 text-base">Followers</Text>
            </View>
            <View className="items-center">
              <Text className="text-white  text-2xl font-bold text-base">120K</Text>
              <Text className="text-gray-400 text-base">Following</Text>
            </View>
          </View>

        </View>

        <Text className="text-white text-2xl font-semibold mt-3">Darius Jackony</Text>
        <Text className="text-gray-300 text-base mt-0.5 leading-5">
          I'm a hustler trusting and having a strong faith in God.
        </Text>
        <View className='mt-2'>
          <View className='flex-row gap-2'>
            <Ionicons name="location-outline" size={16} color="white"/>
            <Text className='text-gray-400'>Kampala, Uganda</Text>
          </View>
          <View className='mt-2 flex-row gap-2'>
            <Ionicons name='calendar-outline'  size={16} color="white" />
            <Text className='text-gray-400'>Joined December 2021 </Text>
          </View>
        </View>
        <View className="flex-row gap-2 mt-5">
          <TouchableOpacity className="flex-1 bg-zinc-800 rounded-lg py-1.5 h-10 items-center">
            <Text className="text-white font-semibold text-base">Edit profile</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-zinc-800 rounded-lg py-1.5 h-10 items-center">
            <Ionicons name='settings-outline' size={20} color="white"/>
          </TouchableOpacity>
        </View>
      </View>
      <View className="h-px bg-zinc-700 mt-4" />
      <View className='mt-10'>
        <Text className='text-white text-base text-center'>Posts...</Text>
      </View>
    </SafeAreaView>
  )
}


export default profile;