import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Ionicons, FontAwesome, AntDesign  } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import axios from 'axios';

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter();
  const API_URL = process.env.EXPO_PUBLIC_API_URL

  const handleLogin = async () => {

    try {
      setLoading(true)
       const response = await axios.post(
          `${API_URL}/signals/login/`,
          {
            email,
            password,
          }
       )
       console.log("Conole message:", response.data)
    } catch (error:any) {
      console.log("Error message:", error.response?.data || error.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <SafeAreaView className='flex-1 bg-black'>
     <StatusBar style='light' />
      <View className="flex-1 bg-black justify-center px-6">
        <Text className="text-white text-5xl font-bold mb-4">
          Welcome Back
        </Text>
        <Text className='text-white mb-8 text-xl'>
          Let's continue your journey
        </Text>
         <View className='flex-row items-center bg-[#111] rounded-xl px-3 mb-3'>
            <Ionicons name="mail-outline" size={20} color="#888" />
            <TextInput
            placeholder="Email"
            placeholderTextColor="#888"
            className="flex-1 text-white p-4 rounded-xl "
            value={email}
            onChangeText={setEmail}
            />
        </View>
        <View className='flex-row items-center bg-[#111] rounded-xl px-3 mb-3'>
            <Ionicons name="key-outline" size={20} color="#888" />
            <TextInput
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry
            className="flex-1 text-white p-4 rounded-xl "
            value={password}
            onChangeText={setPassword}
            />
        </View>
        <Text className='text-white text-right m-3'>
          Forgot password?
        </Text>
        <TouchableOpacity className="bg-white p-4 rounded-xl mt-2"
        onPress={handleLogin}
        disabled={loading}
        >
          <Text className="text-center font-bold">
            {loading ? "Logging in..." : "Login"}
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
            New here? {" "}
            <Text 
             className='font-bold text-white' 
             onPress={() => router.push("/auth/signup")}
             >Create Account</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default login