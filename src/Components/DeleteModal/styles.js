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
		paddingHorizontal: 40,
		display: 'flex',
		gap: 20,
		flexDirection: 'row',
		width: '100%',
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
	bottomButton: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'gray',
		padding: 10,
		width: '50%',
		borderRadius: 10,
	},
	bottomButtonOutline: {
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'gray',
		borderWidth: 1,
		padding: 10,
		width: '50%',
		borderRadius: 10,
	},
	textButton: {
		color: 'white',
		fontSize: 15,
		fontFamily: 'Inter-Bold',
	},
	textButtonOutline: {
		color: 'gray',
		fontSize: 15,
		fontFamily: 'Inter-Bold',
	},
});
