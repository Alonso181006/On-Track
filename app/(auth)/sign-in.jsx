import { Link } from "expo-router";
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import FormField from '../../components/FormField';

const SignIn = () => {
    const [form, setForm] = useState({email: '', password:''})

    const [isSubmitting, setIsSubmitting] = useState(false)
    const submit = () =>{

    }

  return (
    <SafeAreaView className="bg-primary h-full">
        <ScrollView>
            <View className="w-full min-h-[85vh] justify-center items-center">
                <Text className="text-5xl font-jaro">
                    Sign in to stay
                </Text>
                <Text className="text-6xl font-jaro">
                    On Track
                </Text>
                <FormField 
                title="Email"
                value={form.email}
                handleChangeText={(e) => setForm({ ...form, email: e})}
                otherStyles=" w-80 mt-7"
                keyboardType="email-address" // useful for autofilling 
                />
                <FormField 
                title="Password"
                value={form.password}
                handleChangeText={(e) => setForm({ ...form, password: e})}
                otherStyles="w-80 mt-7"
                />
                <CustomButton
                title="Sign In"
                handlePress={submit}
                containerStyles=" w-80 mt-7"
                isLoading={isSubmitting}
                />
                <View className="pt-3 flex-row gap-2 mr-40">
                    <Text className="text-sm text-blue-500">
                        Other Options?
                    </Text>
                    <Link href='/home' className="text-black"> Home</Link>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn