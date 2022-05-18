import { SafeAreaView, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import MainStack from './src/Navigation/MainStack';
import AppLoading from 'expo-app-loading';
import { Inter_900Black } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';

const App = () => {
	const [fontsLoaded] = useFonts({
		Inter_900Black,
	});

	if (!fontsLoaded) {
		return <AppLoading />
	}


	return (
		<SafeAreaView style={styles.container}>
			<MainStack />
		</SafeAreaView>
	);
};

export default App;
