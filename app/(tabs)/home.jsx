import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native'
import { React, useState } from 'react'
import { Calendar } from 'react-native-calendars'

import Habit from '../../components/Habit'
import * as habitsManager from '../global/habits'

// lots to fix here, lots of hardcoded values, and static values that should be dynamic

const Home = () => {
    const [selected, setSelected] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedDay, setSelectedDay] = useState('');
    let days = habitsManager.daysMap;

    const DayPopup = ({ date }) => {
        const habitsForDay = days.get(date);
        if (days.has(date)) {
            const habitsArray = Array.from(habitsForDay.values());
            return (
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={popupVisible}
                    onRequestClose={() => setPopupVisible(false)}
                >
                    <View className="justify-center items-center mt-[350px]">
                        <View
                            className="items-end w-[340px] top-[7px] right-[7px] absolute"
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    setPopupVisible(false);
                                }}
                                className="justify-center items-center w-[15px] h-[15px] rounded-[9999px] bg-[#FF0000] absolute"
                                activeOpacity={0.7}
                            >
                                <Text
                                    className="text-[5px]"
                                >x</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            className="w-[340px] h-[425px] rounded-[12px] bg-[#EFEBEB] my-[40px]"
                            data={habitsArray}
                            renderItem={
                                ({ item }) => <Habit title={item.habitTitle} duration={item.habitDuration} />
                            }
                            contentContainerStyle={{
                                alignItems: 'center',
                                marginVertical: 10
                            }}
                        />
                    </View>

                </Modal>
            )
        }
        else {
            return null;
        }
    }
    const handlePressHabit = () => {

    }


    return (
        <View className="w-[330px] h-[500px] mt-[120px] mx-auto">
            <View className="flex-row justify-between">
                <Text className="ml-2 mt-2">Nextup</Text>
                <Text className="mr-2 mt-2">Time</Text>
            </View>
            <View className="justify-center items-center w-[330px] h-[100px] mb-[40px] mt-[5px] rounded-[12px] bg-[#EFEBEB]">
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
                    if (days.has(day.dateString)) {
                        setSelectedDay(day.dateString);
                        setPopupVisible(true);
                    }
                }}
                markedDates={{
                    [selected]: { selected: true, disableTouchEvent: false }
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
            {popupVisible && (
                <DayPopup date={selectedDay} />
            )}
        </View>
    )
}

export default Home 