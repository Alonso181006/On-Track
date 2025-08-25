import { TouchableOpacity, Text } from 'react-native'
import React from 'react'


// things to do:
// add a size parameter (width and height will be the same)
// figure out how to incorporate the size parameter into tailwind
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

export default CloseButton