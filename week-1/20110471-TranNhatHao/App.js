import { Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'

export default function App() {
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 10000)

  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Page</Text>
    </View>
  );
}
