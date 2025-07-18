import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link href={"/home"} className='text-blue-500'> Home </Link>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({})