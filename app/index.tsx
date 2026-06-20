
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import {router } from "expo-router";
export default function Page() {
  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem("access")
      if (token) {
        router.replace("/posts");
      } else {
        router.replace("/auth/login")
      }
     }
   checkLogin();
   }, [])
   return null;
}