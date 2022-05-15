import { View, Text, Button } from 'react-native';
import React from 'react';
import { styles } from './styles';

const Detail = ({ route, navigation }) => {
	const { name, gasto, vegan } = route.params;

	return (
		<View style={styles.container}>
			<Text>{name}</Text>
			<Button title='Vegan' onPress={() => vegan === true} />
			{vegan ? <Text>Es vegan</Text> : <Text>No es vegan</Text>}
		</View>
	);
};

export default Detail;
