import { Text, View } from "react-native";
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-rose-500">
      <Text className="text-white">Hello Andrew</Text>
      <Link href='/home' style={{ color: 'blue' }}>Start now!</Link>
    </View>
  );
}
