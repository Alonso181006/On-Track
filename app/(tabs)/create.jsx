import { Image, FlatList, Modal, Platform, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { React, useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'

import FormField from '../../components/FormField'
import Habit from '../../components/Habit'
import DropdownComponent from '../../components/DropdownComponent'
import { icons } from '../../constants'
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
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);
    const [form, setForm] = useState({ title: '', duration: '' });

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

    // all these functions below are placed together for easy abstraction purposes (don't want to worry about it too much rn)
    // could want to tweak this a little bit for cancel button
    const toggleTimePicker = () => {
        setTime(new Date());
        setShowTimePicker(!showTimePicker);
    }

    const confirmIOSTime = () => {
        setTime(time.toTimeString());
        setShowTimePicker(!showTimePicker);
    }

    const confirmIOSStartDate = () => {
        setStartDate(startDate.toDateString());
        setShowStartDatePicker(!showStartDatePicker);
    }

    const confirmIOSEndDate = () => {
        setEndDate(endDate.toDateString());
        setShowEndDatePicker(!showEndDatePicker);
    }

    const toggleStartDatePicker = () => {
        setStartDate(new Date());
        setShowStartDatePicker(!showStartDatePicker);
    }

    const toggleEndDatePicker = () => {
        setEndDate(new Date());
        setShowEndDatePicker(!showEndDatePicker);
    }

    const onTimeChange = (event, selectedTime) => {
        const currentTime = selectedTime;
        setTime(new Date(currentTime));
    }

    const onStartDateChange = (event, selectedStartDate) => {
        const currentStartDate = selectedStartDate;
        setStartDate(new Date(currentStartDate));
    }

    const onEndDateChange = (event, selectedEndDate) => {
        const currentEndDate = selectedEndDate;
        setEndDate(new Date(currentEndDate));
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
                        className="items-center w-[340px] h-[630px] rounded-[12px] bg-[#EFEBEB]"
                    >
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
                            <View className={`justify-center border-2 border-blue-black w-full h-16 px-4 bg-black-100 rounded-2xl focus: items-center flex-row ${showTimePicker ? 'border-blue-500' : 'border-black-200'}`}>
                                <TextInput
                                    className='flex-1 text-black font-psemibold text-base'
                                    value={time}
                                    placeholder="Time of Day"
                                    placeholderTextColor="#7b7b8b"
                                    editable={false}
                                    onPressIn={toggleTimePicker}
                                />
                                {showTimePicker && Platform.OS === "ios" && (
                                    <DateTimePicker
                                        display='spinner'
                                        value={time}
                                        mode='time'
                                        onChange={onTimeChange}
                                        style={{
                                            maxHeight: 56,
                                            maxWidth: 280,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    />
                                )}
                            </View>
                        </View>
                        {showTimePicker && Platform.OS === "ios" && (
                            <View className="w-[280px] h-[56px] mt-3 rounded-2xl flex-row justify-around items-center">
                                <TouchableOpacity
                                    onPress={() => {
                                        toggleTimePicker();
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
                        <View className="w-[280px] h-[56px] mt-3 rounded-2xl flex-row items-center">
                            <View className={`justify-center border-2 border-blue-black w-[140px] h-16 px-4 bg-black-100 rounded-2xl focus: items-center flex-row ${showStartDatePicker ? 'border-blue-500' : 'border-black-200'}`}>
                                <TextInput
                                    className='flex-1 text-black font-psemibold text-base'
                                    value={startDate}
                                    placeholder="Start Date"
                                    placeholderTextColor="#7b7b8b"
                                    editable={false}
                                    onPressIn={toggleStartDatePicker}
                                />
                                {/* centering is only off due to the fact that it has to account for double digit days */}
                                {showStartDatePicker && Platform.OS === "ios" && (
                                    <DateTimePicker
                                        display='default'
                                        value={startDate}
                                        mode='date'
                                        onChange={onStartDateChange}
                                        style={{
                                            maxHeight: 56,
                                            maxWidth: 140,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    />
                                )}
                            </View>
                            <View className={`justify-center border-2 border-blue-black w-[140px] h-16 px-4 bg-black-100 rounded-2xl focus: items-center flex-row ${showEndDatePicker ? 'border-blue-500' : 'border-black-200'}`}>
                                <TextInput
                                    className='flex-1 text-black font-psemibold text-base'
                                    value={endDate}
                                    placeholder="End Date"
                                    placeholderTextColor="#7b7b8b"
                                    editable={false}
                                    onPressIn={toggleEndDatePicker}
                                />
                                {/* centering is only off due to the fact that it has to account for double digit days */}
                                {showEndDatePicker && Platform.OS === "ios" && (
                                    <DateTimePicker
                                        display='default'
                                        value={endDate}
                                        mode='date'
                                        onChange={onEndDateChange}
                                        style={{
                                            maxHeight: 56,
                                            maxWidth: 140,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    />
                                )}
                            </View>
                        </View>
                        {(showStartDatePicker || showEndDatePicker) && (

                        <View className="flex-row">
                            <View className="justify-start w-[140px] h-[28px] mt-3">
                                {showStartDatePicker && Platform.OS === "ios" && (
                                    <View className="flex-row justify-around w-[140px]">
                                        <TouchableOpacity
                                            onPress={() => {
                                                toggleStartDatePicker();
                                            }}
                                            className="justify-center items-center bg-[#FF0000] w-[28px] h-[28px] rounded-[9999px]"
                                            activeOpacity={0.7}
                                        >
                                            <Image
                                                source={icons.close}
                                                className="w-4 h-4" // make sure this is not hardcoded, but im just testing out sizes for rn
                                                resizeMode='contain'
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => {
                                                confirmIOSStartDate();
                                            }}
                                            className="justify-center items-center bg-[#04F404] w-[28px] h-[28px] rounded-[9999px]"
                                            activeOpacity={0.7}
                                        >
                                            <Image
                                                source={icons.check}
                                                className="w-4 h-4" // make sure this is not hardcoded, but im just testing out sizes for rn
                                                resizeMode='contain'
                                            />
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </View>
                            <View className="justify-end w-[140px] h-[28px] mt-3">
                                {showEndDatePicker && Platform.OS === "ios" && (
                                    <View className="">
                                        <View className="flex-row justify-around w-[140px]">
                                            <TouchableOpacity
                                                onPress={() => {
                                                    toggleEndDatePicker();
                                                }}
                                                className="justify-center items-center bg-[#FF0000] w-[28px] h-[28px] rounded-[9999px]"
                                                activeOpacity={0.7}
                                            >
                                                <Image
                                                    source={icons.close}
                                                    className="w-4 h-4" // make sure this is not hardcoded, but im just testing out sizes for rn
                                                    resizeMode='contain'
                                                />
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    confirmIOSEndDate();
                                                }}
                                                className="justify-center items-center bg-[#04F404] w-[28px] h-[28px] rounded-[9999px]"
                                                activeOpacity={0.7}
                                            >
                                                <Image
                                                    source={icons.check}
                                                    className="w-4 h-4" // make sure this is not hardcoded, but im just testing out sizes for rn
                                                    resizeMode='contain'
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )}
                            </View>
                        </View>
                        )}
                        <TouchableOpacity
                            onPress={() => {
                                addHabit();
                                setPopupVisible(false);
                                toggleTimePicker();
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