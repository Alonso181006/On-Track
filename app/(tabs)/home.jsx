import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

// lots to fix here, lots of hardcoded values, and static values that should be dynamic

const Home = () => {
    return (
        <View className="w-[330px] h-[500px] mt-[150px] mx-auto">
            <View className="flex-row justify-between">
                <Text className="ml-2 mt-2">Nextup</Text>
                <Text className="mr-2 mt-2">Time</Text>
            </View>
            <View className="justify-center items-center w-[330px] h-[100px] rounded-[12] bg-[#EFEBEB]">
                <TouchableOpacity className="w-[316px] h-[75px] rounded-[12] bg-[#D9D9D9]">
                    <View className="flex-row my-auto justify-between">
                        <Text className="ml-2">Habit</Text>
                        <Text className="mr-2">Duration</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home 