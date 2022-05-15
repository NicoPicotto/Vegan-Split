import { TouchableOpacity, View, Text, Alert, FlatList } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import FriendInput from '../../Components/Input';
import CustomButton from '../../Components/Button';

const Home = ({ navigation }) => {
	const [text, setTextItem] = useState('');
	const [itemList, setItemList] = useState([]);
	const [selectedItem, setSelectedItem] = useState([]);
	const [vegan, setVegan] = useState(false);
	const [gasto, setGasto] = useState(0);

	//Función para capturar el texto
	const handleOnChangeInput = (value) => {
		setTextItem(value);
	};

	//Función para añadir el texto capturado
	const addItem = () => {
		if (text !== '') {
			setItemList([
				...itemList,
				{ id: itemList.length + 1, value: text, gasto: 0, vegan: false },
			]);
			setTextItem('');
			console.log(itemList);
		} else {
			Alert.alert('Debes ingresar un nombre');
		}
	};

	//Función para entrar al detalle
	const onSelectDetail = ({ item }) => {
		navigation.navigate('Detail', {
            name: item.value,
            gasto: item.gasto,
            vegan: item.vegan
        });
	};

	//Funcion para borrar item
	const handleDeleteItem = (id) => {
		const newList = itemList.filter((itemList) => itemList.id !== id);
		setSelectedItem({});
		setItemList(newList);
	};

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<FriendInput
					placeholder='Ingresar item'
					value={text}
					handleOnChangeText={handleOnChangeInput}
					autoCorrect={false}
					autoFocus={true}
					style={styles.textInput}
				/>
				<TouchableOpacity style={styles.button} onPress={() => addItem()}>
					<Text>+</Text>
				</TouchableOpacity>
			</View>
			<FlatList
				data={itemList}
				style={styles.listContainer}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => {
							onSelectDetail({ item });
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
			<View style={styles.buttonContainer}>
				<CustomButton textButton='LIMPIAR' bgColor='red' textColor='#ecedf1' />
				<CustomButton
					textButton='CALCULAR'
					bgColor='#f3b52e'
					textColor='black'
				/>
			</View>
		</View>
	);
};

export default Home;
