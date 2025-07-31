import { View, Text, TouchableOpacity } from 'react-native'
import { React, useState } from 'react'
import { Calendar } from 'react-native-calendars'

import Habit from '../../components/Habit'

// lots to fix here, lots of hardcoded values, and static values that should be dynamic

const Home = () => {
    const [selected, setSelected] = useState(false);

    const handleNextupPopup = () => {

    }

    const handleClosePopup = () => {

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
                    handlePress={handleNextupPopup}
                    handleClose={handleClosePopup}
                    isNextUp={true}
                />
                {/* <TouchableOpacity
                    className="w-[316px] h-[75px] rounded-[12px] bg-[#D9D9D9]"
                    activeOpacity={0.7}>
                    <View className="flex-row my-auto justify-between">
                        <Text className="ml-2">Habit</Text>
                        <Text className="mr-2">Duration</Text>
                    </View>
                </TouchableOpacity> */}
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