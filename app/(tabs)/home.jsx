import { View, Text, TouchableOpacity } from 'react-native'
import { React, useState } from 'react'
import { Calendar } from 'react-native-calendars'

import Habit from '../../components/Habit'

// lots to fix here, lots of hardcoded values, and static values that should be dynamic

const Home = () => {
    const [selected, setSelected] = useState(false);

    const handlePressHabit = () => {

    }

    return (
        <View className="w-[330px] h-[500px] mt-[120px] mx-auto">
            <View className="flex-row justify-between">
                <Text className="ml-2 mt-2">Nextup</Text>
                <Text className="mr-2 mt-2">Time</Text>
            </View>
            <View className="justify-center items-center w-[330px] h-[100px] mb-[40px] rounded-[12px] bg-[#EFEBEB]">
                <Habit
                    title="Habit"
                    duration="Duration"
                    handlePress={handlePressHabit}
                    isNextUp={true}
                />
            </View>
            <Calendar
                onDayPress={day => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                    [selected]: { selected: true, disableTouchEvent: true }
                }}
                style={{
                    borderRadius: 12
                }}
                theme={{
                    // backgroundColor: '#d9d9d9',
                    calendarBackground: "#EFEBEB",
                    selectedDayBackgroundColor: "#D9D9D9",
                    selectedDayTextColor: "#000000",
                    dayTextColor: '#000000',
                    monthTextColor: '#000000',
                    arrowColor: "#000000",
                }}
            />
        </View>
    )
}

export default Home 