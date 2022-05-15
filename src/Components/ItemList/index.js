import React from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles.js';

const ItemList = ({ itemList, onSelect }) => {
	return (
		<FlatList
			data={itemList}
			style={styles.listContainer}
			renderItem={({ item }) => (
				<TouchableOpacity
					onPress={() => {
						onSelectDetail(item);
					}}
					style={styles.touchableContainer}
				>
					<Text style={styles.itemsAgregados}>{item.value}</Text>
					{item.vegan ? (
						<Text style={styles.vegan}>Es vegano</Text>
					) : (
						<Text style={styles.noVegan}>No es vegan</Text>
					)}
					<Text style={styles.gasto}> $ {item.gasto}</Text>
				</TouchableOpacity>
			)}
			keyExtractor={(item) => item.id}
		/>
	);
};

export default ItemList;
