import { FlatList, Modal, Platform, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { React, useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'

import FormField from '../../components/FormField'
import Habit from '../../components/Habit'
import DropdownComponent from '../../components/DropdownComponent'
import { addHabit, daysMap } from '../global/habits'

// refactor close button because code readability is questionable right now
// consider blur effect when popup is active
// figure out how to implement frequency and timeline after flatlist rendering is working
// Still need to verify if forms are filled, as well as have a check if user is inputting duplicate habits

// Need to eventually cater to android specific issues and ios specific issues with regards to TimePicker
const Create = () => {
    let selectedTime;
    const [habitsArray, setHabitsArray] = useState([]);
    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedFrequency, setSelectedFrequency] = useState();
    const [time, setTime] = useState();
    const [showPicker, setShowPicker] = useState(false);
    const [form, setForm] = useState({ title: '', duration: '' });
    const [isFocused, setIsFocused] = useState(false);

    const frequency = [
        { label: "Don't repeat", value: '1' },
        { label: "Everyday", value: '2' },
        { label: "Every Monday", value: '3' },
        { label: "Every Tuesday", value: '4' },
        { label: "Every Wednesday", value: '5' },
        { label: "Every Thursday", value: '6' },
        { label: "Every Friday", value: '7' },
        { label: "Every Saturday", value: '8' },
        { label: "Every Sunday", value: '9' },
        { label: "Custom", value: '10' },
    ]

    const addHabit = () => {
        const habitData = { title: form.title, duration: form.duration };
        setHabitsArray(habitsArray => [...habitsArray, habitData]);
    };

    // could want to tweak this a little bit for cancel button
    const togglePicker = () => {
        setTime(new Date());
        setShowPicker(!showPicker);
    }
    
    const confirmIOSTime = () => {
        setTime(time.toTimeString());
        setShowPicker(!showPicker);
    }

    const onChange = (event, selectedTime) => {
        const currentTime = selectedTime;
        setTime(new Date(currentTime));
    }


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
                                onPress={() => {
                                    setPopupVisible(false);
                                    togglePicker();
                                }}
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
                            otherStyles="w-80 mt-3"
                        />
                        <FormField
                            placeholder="Duration"
                            value={form.duration}
                            handleChangeText={(e) => setForm({ ...form, duration: e })}
                            otherStyles="w-80 mt-3"
                        />
                        {/* might want to turn this into a custom component or adapt FormField with conditional rendering */}
                        <View className="space-y-2 w-80 mt-3">
                            <View className={`justify-center border-2 border-blue-black w-full h-16 px-4 bg-black-100 rounded-2xl focus: items-center flex-row ${showPicker ? 'border-blue-500' : 'border-black-200'}`}>
                                <TextInput
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)}
                                    className='flex-1 text-black font-psemibold text-base'
                                    value={time}
                                    placeholder="Time of Day"
                                    placeholderTextColor="#7b7b8b"
                                    editable={false}
                                    onPressIn={togglePicker}
                                />
                                {showPicker && Platform.OS === "ios" && (
                                    <DateTimePicker
                                        display='spinner'
                                        value={time}
                                        mode='time'
                                        onChange={onChange}
                                        style={{
                                            maxHeight: 56,
                                            maxWidth: 280,
                                            alignSelf: 'center',
                                            justifyContent: 'center'
                                        }}
                                    />
                                )}
                            </View>
                        </View>
                        {showPicker && Platform.OS === "ios" && (
                            <View className="w-[280px] h-[56px] mt-3 rounded-2xl flex-row justify-around items-center">
                                <TouchableOpacity
                                    onPress={() => {
                                        togglePicker();
                                    }}
                                    className="justify-center items-center w-[88px] h-[50px] rounded-[1000px] bg-[#D9D9D9]"
                                    activeOpacity={0.7}>
                                    <Text>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        confirmIOSTime();
                                    }}
                                    className="justify-center items-center w-[88px] h-[50px] rounded-[1000px] bg-[#D9D9D9]"
                                    activeOpacity={0.7}>
                                    <Text>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        <DropdownComponent
                            title='Frequency'
                            items={frequency}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                addHabit();
                                setPopupVisible(false);
                                togglePicker();
                            }}
                            className="justify-center items-center mt-3 w-[88px] h-[50px] rounded-[1000px] bg-[#D9D9D9]"
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