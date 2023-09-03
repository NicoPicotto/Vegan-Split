import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Calculate from '../Screens/Calculate';
import Home from '../Screens/Home';

const Stack = createNativeStackNavigator();

const MainStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='Calculate' component={Calculate} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainStack;
