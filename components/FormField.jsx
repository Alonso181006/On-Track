import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'

import { icons } from '../constants'

// need to figure out how to properly center the text vertically

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = () => {
        setIsFocused(true)
    }

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            {title != null && (
                <Text className='text-base text-black-500'>{title}</Text>
            )}

            <View className={`border-2 border-blue-black w-full h-16 px-4 bg-black-100 rounded-2xl focus: items-center flex-row ${isFocused ? 'border-blue-500' : 'border-black-200'}`}>
                <TextInput
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className='flex-1 text-black font-psemibold text-base'
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                />

                {title === 'Password' && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image source={!showPassword ? icons.eye : icons.eyeHide} className='w-6 h-6' resizeMode='contain' />

                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default FormField

