import { SafeAreaView, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import MainStack from './src/Navigation/MainStack';

const App = () => {
	return (
		<SafeAreaView style={styles.container}>
			<MainStack />
		</SafeAreaView>
	);
};

export default App;
