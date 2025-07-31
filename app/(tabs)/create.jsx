import { View, Text, TouchableOpacity } from 'react-native'
import { React, useState } from 'react'
import { router } from 'expo-router'

const Create = () => {
    const [habitsArray, setHabitsArray] = useState([])
    const addHabit = () => {
        router.navigate('/(tabs)/customize')
    }

    return (
        <View className="justify-center items-center mt-[60px]">
            <Text className="text-4xl font-jaro">Habits</Text>
            <View className="w-[340px] h-[425px] rounded-[12px] bg-[#EFEBEB] my-[40px]" />
            <TouchableOpacity
                onPress={addHabit}
                className="justify-center items-center w-[250px] h-[50px] rounded-[1000px] bg-[#D9D9D9]"
                activeOpacity={0.7}>
                <Text>Add Habit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Create