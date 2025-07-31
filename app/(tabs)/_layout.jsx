import { Image, View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

import { icons } from "../../constants"

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="justify-center items-center gap-2">
            <Image
                source={icon}
                className="w-6 h-6" // make sure this is not hardcoded, but im just testing out sizes for rn
                resizeMode='contain'
                tintColor={color}
            />
        </View>
    )
}

const Tabslayout = () => {
    return (
        <>
            <Tabs screenOptions={{
                tabBarActiveTintColor: '#000000',
                tabBarInactiveTintColor: '#FFFFFF',
                tabBarStyle: {
                    backgroundColor: '#D9D9D9',
                    borderTopWidth: 1,
                    borderTopColor: '#232533', // change this border color, it stands out a bit too much
                    height: 84 // make sure this is not hardcoded, but im just testing out sizes for rn
                }
            }}>
                <Tabs.Screen // figure out if there is a way to use tailwind css for header title
                    name='home'
                    options={{
                        title: "Home",
                        headerTitleStyle: {
                            fontFamily: "Jaro-Regular",
                            fontSize: 24
                        },
                        headerTitle: "On Track",
                        headerTitleAlign: 'left',
                        headerStyle: {
                            backgroundColor: '#D9D9D9',
                            height: 125,
                        },
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='create'
                    options={{
                        title: "Create",
                        headerTitleStyle: {
                            fontFamily: "Jaro-Regular",
                            fontSize: 24
                        },
                        headerTitle: "On Track",
                        headerTitleAlign: 'left',
                        headerStyle: {
                            backgroundColor: '#D9D9D9',
                            height: 125,
                        },
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.create}
                                color={color}
                                name="Create"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='profile'
                    options={{
                        title: "Profile",
                        headerTitleStyle: {
                            fontFamily: "Jaro-Regular",
                            fontSize: 24
                        },
                        headerTitle: "On Track",
                        headerTitleAlign: 'left',
                        headerStyle: {
                            backgroundColor: '#D9D9D9',
                            height: 125,
                        },
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.profile}
                                color={color}
                                name="Profile"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='customize'
                    options={{
                        href: null,
                        title: "Customize",
                        headerTitleStyle: {
                            fontFamily: "Jaro-Regular",
                            fontSize: 24
                        },
                        headerTitle: "On Track",
                        headerTitleAlign: 'left',
                        headerStyle: {
                            backgroundColor: '#D9D9D9',
                            height: 125,
                        }
                    }}
                />
            </Tabs>
        </>
    )
}

export default Tabslayout