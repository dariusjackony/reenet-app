import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const ActionButton = ({icon, label, onPress, active}) => {
  return (
    <Pressable onPress={onPress}>
       <Text className={active ? "text-blue-400": "text-zinc-400"}>
         {icon} {label}
       </Text>
    </Pressable>
  )
}

export default ActionButton;
