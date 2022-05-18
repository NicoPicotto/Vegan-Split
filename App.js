import { SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import { styles } from './styles';
import MainStack from './src/Navigation/MainStack';

const App = () => {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar
				animated={true}
				backgroundColor='gainsboro'
				hidden={false}
				barStyle={'dark-content'}
			/>
			<MainStack />
		</SafeAreaView>
	);
};

export default App;
