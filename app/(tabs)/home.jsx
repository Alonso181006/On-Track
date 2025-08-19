import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native'
import { React, useState, useCallback } from 'react'
import { Calendar } from 'react-native-calendars'
import { useFocusEffect } from 'expo-router'

import Habit from '../../components/Habit'
import * as habitsManager from '../global/habits'

// lots to fix here, lots of hardcoded values, and static values that should be dynamic
// Check if selected and selectedDay are actually just doing the same thing
// Real time re-rendering is still buggy, popup closes and opens upon removing a "habit"

const Home = () => {
    const [selected, setSelected] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedDay, setSelectedDay] = useState('');
    const [habitsArray, setHabitsArray] = useState([]);
    let days = habitsManager.daysMap;
    let habitsForDay;

    const handlePressHabit = () => {

    }

    const removeHabit = (timeOfDay) => {
        habitsForDay.delete(timeOfDay);
        setHabitsArray(Array.from(habitsForDay.values()));
    }

    // fixes issue where empty popup shows up when adding a habit
    useFocusEffect(
        useCallback(() => {
          return () => setSelectedDay(false);
        }, [])
      );

    // abstract this into a custom component
    const DayPopup = ({ date }) => {
        habitsForDay = days.get(date);
        if (days.has(date) && habitsForDay.size != 0) {
            return (
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={popupVisible}
                    onRequestClose={() => setPopupVisible(false)}
                >
                    <View className="justify-center items-center mt-[400px]">
                        <View className="justify-center items-center w-[340px] h-[425px] rounded-[12px] bg-[#EFEBEB]">
                            <View
                                className="items-end top-[7px] right-[7px] absolute"
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
                            <View>
                                <FlatList
                                    className="my-[20px]"
                                    data={habitsArray}
                                    renderItem={
                                        ({ item }) =>
                                            // <Habit
                                            //     title={item.habitTitle}
                                            //     duration={item.habitDuration}
                                            // />
                                            <TouchableOpacity onPress={() => removeHabit(item.habitTimeOfDay)}>
                                                <Text>{item.habitTimeOfDay}</Text>
                                            </TouchableOpacity>
                                    }
                                    contentContainerStyle={{
                                        alignItems: 'center',
                                        marginVertical: 10
                                    }}
                                />
                            </View>
                        </View>
                    </View>


                </Modal>
            )
        }
        else {
            return null;
        }
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
                        habitsForDay = days.get(day.dateString);
                        setHabitsArray(Array.from(habitsForDay.values()));
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