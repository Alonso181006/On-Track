import { SplashScreen, Stack } from 'expo-router';
import React, { useEffect } from 'react'
import { useFonts } from 'expo-font'
import "./global.css"

export default function RootLayout() {

    const [fontsLoaded, error] = useFonts({
        "Jaro-Regular": require("../assets/fonts/Jaro-Regular.ttf"),
    });

    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error])

    if (!fontsLoaded && !error) return null;


    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false }} />
            <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        </Stack>
    );
}
