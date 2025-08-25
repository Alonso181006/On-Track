import { TouchableOpacity, Text, View, Modal, FlatList } from 'react-native'
import React from 'react'

import Habit from './Habit';
import * as habitsManager from '../app/global/habits';

// things to do:
// define days, habitsForDay
// figure out the removeHabit function and where to put it
// figure out habitsArray and whether or not that should also be a part of habitsManager


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
                                        <Habit
                                            title={item.habitTitle}
                                            duration={item.habitDuration}
                                            handleClose={() => removeHabit(item.habitTimeOfDay)}
                                        />
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

export default DayPopup