import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 40,
		paddingHorizontal: 20,
		alignItems: 'center',
	},
	inputContainer: {
		width: '100%',
		padding: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	button: {
		width: '15%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#f3b52e',
		padding: 10,
		borderRadius: 10,
		elevation: 2,
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	listContainer: {
		width: '90%',
		marginVertical: 20,
	},
	touchableContainer: {
		flexDirection: 'row',
		padding: 10,
		marginVertical: 5,
		backgroundColor: 'white',
		justifyContent: 'space-between',
		borderRadius: 10,
		elevation: 2,
	},
	itemsAgregados: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	gasto: {
		fontSize: 16,
	},
	vegan: {
		fontSize: 16,
		color: 'green',
	},
	noVegan: {
		fontSize: 16,
		color: 'red',
	},
	textInput: {
		padding: 10,
		fontSize: 18,
	},
	settingsContainer: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		borderBottomColor: 'gainsboro',
		borderBottomWidth: 1,
		paddingBottom: 10,
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	modalButton: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: '#F194FF',
	},
	buttonClose: {
		backgroundColor: '#2196F3',
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
	},
});
