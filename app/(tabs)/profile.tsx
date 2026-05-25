import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
const profile = () => {
  return (
    <SafeAreaView className='flex-1 bg-black'>
      <StatusBar style='light' />
      <View className="px-4 mt-4">
        <View className="flex-row items-center justify-between">
          <Image
            source={require("../../assets/images/pfp.jpeg")}
            className="w-20 h-20 rounded-full border-2 border-gray-700"
          />

          <View className="flex-row flex-1 justify-around ml-6">
            <View className="items-center">
              <Text className="text-white font-bold text-base">48</Text>
              <Text className="text-gray-400 text-xs">Posts</Text>
            </View>
            <View className="items-center">
              <Text className="text-white font-bold text-base">100</Text>
              <Text className="text-gray-400 text-xs">Followers</Text>
            </View>
            <View className="items-center">
              <Text className="text-white font-bold text-base">120K</Text>
              <Text className="text-gray-400 text-xs">Following</Text>
            </View>
          </View>

        </View>

        <Text className="text-white font-semibold mt-3">Darius Jackony</Text>
        <Text className="text-gray-300 text-sm mt-0.5 leading-5">
          I'm a hustler trusting and having a strong faith in God.
        </Text>

        <View className="flex-row gap-2 mt-3">
          <TouchableOpacity className="flex-1 bg-zinc-800 rounded-lg py-1.5 items-center">
            <Text className="text-white font-semibold text-sm">Edit profile</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-zinc-800 rounded-lg py-1.5 items-center">
            <Text className="text-white font-semibold text-sm">Share profile</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default profile