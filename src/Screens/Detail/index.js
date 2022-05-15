import { View, Text, Button } from 'react-native';
import React from 'react';
import { styles } from './styles';

const Detail = ({ route, navigation }) => {

	const {array} = route.params;

	console.log("ItemList: ", array)


	return (
		<View style={styles.container}>
			<View>
				<Text>Detalle</Text>
			</View>
		</View>
	);
};

export default Detail;
