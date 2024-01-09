import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomSplashScreen from './components/SplashScreen';

SplashScreen.hideAsync();
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAppIsReady(true);
    }, 10000);
  }, []);


  return (
    <View style={styles.container}>
      {appIsReady ? <Text>Home</Text> : <CustomSplashScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
