import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
