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
		color: "green",
	},
	noVegan: {
		fontSize: 16,
		color: "red",
	},
});
