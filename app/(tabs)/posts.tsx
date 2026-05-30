import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
  Image,
  FlatList
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from 'react';
import {Plus} from  "lucide-react-native";
import { useRouter } from 'expo-router';
import {
  Heart,
  MessageCircle,
  Bookmark,
  Share2
} from "lucide-react-native";
import axios from 'axios';
import Constants from "expo-constants";

type Post = {
  id: number;
  signal_text: string;
  likes: number;
  liked: boolean;
}


const Posts = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const router = useRouter();
  const [data, setData] = useState<Post[]>([]);
  const API_URL = process.env.EXPO_PUBLIC_API_URL
  const [activeCommentId, setActiveCommentId] = useState<number | null>(null);
  const [comment, setComment] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/signals/`);
        setData(response.data);
        console.log("API RESPONSE:", response.data);
      } catch (error) {
        console.log("Error:", error);
      }
    }
    fetchData();
  },[API_URL])
  const renderPost = ({ item }: {item: Post}) => (
    <View className="p-4 border-b border-zinc-800">

      <View className="flex-row items-center mb-3">
        <Image
          source={require("../../assets/images/pfp.jpeg")}
          className="w-10 h-10 rounded-full mr-3"
        />
        <Text className="text-white text-lg font-bold">
          Darius
        </Text>
      </View>
      <Text className="text-white text-base mb-4 ml-10">
        {item.signal_text}
      </Text>
      <View className="flex-row justify-around">
        <Pressable
          onPress={() => console.log('Liked')}
          className="flex-row items-center gap-2"
        >
          <Heart
            size={20}
            color= "#9ca3af"
            fill= "none"
          />
          <Text className="text-zinc-400">
            {item.likes}
          </Text>
        </Pressable>
        <Pressable 
         className="flex-row items-center gap-2"
         onPress={() => setActiveCommentId(activeCommentId === item.id ? null : item.id)}
         >
          <MessageCircle size={20} color="#9ca3af" />
          <Text className="text-zinc-400">
            3
          </Text>
        </Pressable>
        <Pressable>
          <Bookmark size={20} color="#9ca3af" />
        </Pressable>
        <Pressable>
          <Share2 size={20} color="#9ca3af" />
        </Pressable>
      </View>
      {activeCommentId === item.id && (
        <View>
          <TextInput
            placeholder="Write a comment..."
            placeholderTextColor="#9ca3af"
            value={comment}
            onChangeText={setComment}
            className="bg-zinc-900 text-white p-3 rounded-lg"
          />
          <Pressable>
            <Text>
              Post
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar style="light" />
      <View className="h-16 border-b border-zinc-800 flex-row items-center justify-between px-5">
        <Text className="text-white text-2xl font-bold">
          REENET
        </Text>
        <Image
          source={require("../../assets/images/pfp.jpeg")}
          className='w-10 h-10 rounded-full'
        />
      </View>
      <FlatList
        data={data}
        renderItem={renderPost}
        keyExtractor={(item) => item.id.toString()}
      />
      <Pressable
      onPress={()=> router.push("/createposts")}
      className="absolute bottom-6 right-6 bg-white w-14 h-14 items-center justify-center rounded-full"
      >
        <Plus size={28} color="black" />
      </Pressable>
    </SafeAreaView>
  );
};

export default Posts;

const styles = StyleSheet.create({});