import { FlatList, Modal, View, Text, TouchableOpacity } from 'react-native'
import { React, useState } from 'react'

import FormField from '../../components/FormField'
import Habit from '../../components/Habit'
import {addHabit, daysMap} from '../global/habits'

// refactor close button because code readability is questionable right now
// consider blur effect when popup is active
// figure out how to implement frequency and timeline after flatlist rendering is working
// Still need to verify if forms are filled, as well as have a check if user is inputting duplicate habits

const Create = () => {
    const [habitsArray, setHabitsArray] = useState([]);
    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedFrequency, setSelectedFrequency] = useState();
    const [form, setForm] = useState({ title: '', duration: '' });

    const addHabit = () => {
        const habitData = { title: form.title, duration: form.duration };
        setHabitsArray(habitsArray => [...habitsArray, habitData]);
    };

    return (
        <View className="justify-center items-center mt-[60px]">
            <Text className="text-4xl font-jaro">Habits</Text>
            <FlatList
                className="w-[340px] h-[425px] rounded-[12px] bg-[#EFEBEB] my-[40px]"
                data={habitsArray}
                renderItem={
                    ({ item }) => <Habit title={item.title} duration={item.duration} />
                }
                contentContainerStyle={{
                    alignItems: 'center',
                    marginVertical: 10
                }}
            />
            <TouchableOpacity
                onPress={() => {
                    setPopupVisible(true)
                }}
                className="justify-center items-center w-[250px] h-[50px] rounded-[1000px] bg-[#D9D9D9]"
                activeOpacity={0.7}>
                <Text>Add Habit</Text>
            </TouchableOpacity>
            <Modal
                animationType='slide'
                transparent={true}
                visible={popupVisible}
                onRequestClose={() => setPopupVisible(false)}
            >
                <View
                    className="items-center justify-center flex-1"
                >
                    <View
                        className="items-center w-[340px] h-[600px] rounded-[12px] bg-[#EFEBEB]"
                    >
                        <View
                            className="items-end top-[7px] right-[7px] absolute"
                        >
                            <TouchableOpacity
                                onPress={() => setPopupVisible(false)}
                                className="justify-center items-center w-[15px] h-[15px] rounded-[9999px] bg-[#FF0000] absolute"
                                activeOpacity={0.7}
                            >
                                <Text
                                    className="text-[5px]"
                                >x</Text>
                            </TouchableOpacity>
                        </View>
                        <Text className="text-center mt-[50px] text-5xl font-jaro">What habit would you like to develop?</Text>
                        <FormField
                            placeholder="Title"
                            value={form.title}
                            handleChangeText={(e) => setForm({ ...form, title: e })}
                            otherStyles="w-80 mt-1"
                        />
                        <FormField
                            placeholder="Duration"
                            value={form.duration}
                            handleChangeText={(e) => setForm({ ...form, duration: e })}
                            otherStyles="w-80 mt-1"
                        />
                        
                        <TouchableOpacity
                            onPress={() => {
                                addHabit();
                                setPopupVisible(false);
                            }}
                            className="justify-center items-center w-[88px] h-[50px] rounded-[1000px] bg-[#D9D9D9]"
                            activeOpacity={0.7}>
                            <Text>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>
        </View>
    )
}

export default Create