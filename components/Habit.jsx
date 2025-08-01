import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'

// figure out if isLoading is needed

const CloseButton = ({ shouldNotRender, handlePressClose }) => {
    if (!shouldNotRender) {
        return (
            <View
                className="items-end top-[7px] right-[7px]"
            >
                <TouchableOpacity
                    onPress={handlePressClose}
                    className="justify-center items-center w-[8px] h-[8px] rounded-[9999px] bg-[#FF0000] absolute"
                    activeOpacity={0.7}
                >
                    <Text
                        className="text-[5px]"
                    >x</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return null;
}

const Habit = ({ title, duration, handlePress, handleClose, isNextUp }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            className="w-[316px] h-[75px] rounded-[12px] bg-[#D9D9D9]"
            activeOpacity={0.7}>
            <CloseButton
                shouldNotRender={isNextUp}
                handlePressClose={handleClose} />
            <View className="flex-row my-auto justify-between">
                <Text className="ml-3">{title}</Text>
                <Text className="mr-3">{duration}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Habit