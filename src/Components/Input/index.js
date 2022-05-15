import { View, TextInput } from 'react-native';
import React from 'react';
import { styles } from './styles';

const FriendInput = ({ handleOnChangeText, value, ...props }) => {
	return (
		<View>
			<TextInput
				{...props}
				placeholder='Agregar amigo...'
				onChangeText={(text) => handleOnChangeText(text)}
				autoCorrect={false}
				autoFocus={true}
				value={value}
				style={styles.textInput}
			/>
		</View>
	);
};

export default FriendInput;
