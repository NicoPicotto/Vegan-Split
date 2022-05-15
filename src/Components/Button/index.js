import { TouchableOpacity, Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';

const CustomButton = ({ textButton, onPressProp, bgColor, textColor }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={() => onPressProp()}>
			<Text
				style={[
					styles.textButton,
					{ backgroundColor: bgColor, color: textColor },
				]}
			>
				{textButton}
			</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;
