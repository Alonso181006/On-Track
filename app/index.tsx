import CustomButton from "@/components/CustomButton";
import { Link, router } from 'expo-router';
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar';


export default function App() {
    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <View className="w-full justify-center items-center min-h-[85vh] px-4">
                    <Text className="text-5xl font-jaro">
                        On Track
                    </Text>
                    <CustomButton
                        title="Sign In with Google"
                        handlePress={() => router.push('/sign-in')}
                        containerStyles="w-80 mt-7"
                    />
                    <CustomButton
                        title="Sign In with Apple"
                        handlePress={() => router.push('/sign-in')}
                        containerStyles="w-80 mt-7"
                    />
                    <CustomButton
                        title="Email/Phone Number"
                        handlePress={() => router.push('/sign-in')}
                        containerStyles="w-80 mt-7"
                    />
                    <View className="justify-center pt-5 flex-row gap-2 mt-3">
                        <Text className="text-md text-black">
                            Don't have an account?
                        </Text>
                        <Link href='/sign-in' className='text-md font-psemibold text-blue-600'>Sign up now</Link>
                    </View>
                </View>
            </ScrollView>
            <StatusBar backgroundColor="#161622" style='dark' />
        </SafeAreaView>
    );
}
