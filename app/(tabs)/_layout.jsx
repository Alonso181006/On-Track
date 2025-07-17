import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

import { icons } from "../../constants"

const Tabslayout = () => {
    return (
        <>
            <Tabs>
                <Tabs.Screen
                    name='home'
                    options={{
                        title: "Home",
                        headerShown: false,
                    }}
                />
                <Tabs.Screen
                    name='create'
                    options={{
                        title: "Create",
                        headerShown: false,
                    }}
                />
                <Tabs.Screen
                    name='profile'
                    options={{
                        title: "Profile",
                        headerShown: false,
                    }}
                />
            </Tabs>
        </>
    )
}

export default Tabslayout