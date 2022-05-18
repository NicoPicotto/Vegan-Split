import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	modalContainerContent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalContent: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	modalButton: {
		marginVertical: 20,
		display: 'flex',
		flexDirection: 'row',
		width: '70%',
		justifyContent: 'space-around',
	},

	nombreModal: {
		fontSize: 18,
	},
	precioModal: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#46563a',
	},
});
