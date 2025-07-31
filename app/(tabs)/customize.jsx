import { View, Text, TouchableOpacity } from 'react-native'
import { React, useState } from 'react'

import FormField from '../../components/FormField'
import DropDown from '../../components/DropDown'

const Customize = () => {

    const [form, setForm] = useState({ title: '', duration: '' });
    const addHabit = () => {

    };
    return (
        <View className="justify-center items-center mt-[100px]">
            <Text className="text-center w-[288px] h-[135px] text-5xl font-jaro">
                What habit would you like to develop?
            </Text>
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
            <DropDown />
            <DropDown />
            <TouchableOpacity
                onPress={addHabit}
                className="justify-center items-center w-[88px] h-[50px] rounded-[1000px] bg-[#D9D9D9]"
                activeOpacity={0.7}>
                <Text>Save</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Customize