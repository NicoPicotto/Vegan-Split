import {
	TouchableOpacity,
	View,
	Text,
	Alert,
	FlatList,
	Switch,
	TextInput,
	StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import CustomButton from '../../Components/Button';
import DeleteModal from '../../Components/DeleteModal';

const Home = ({ navigation }) => {
	const [text, setTextItem] = useState('');
	const [itemList, setItemList] = useState([]);
	const [selectedItem, setSelectedItem] = useState([]);
	const [isEnabled, setIsEnabled] = useState(false);
	const [modalDeleteVisible, setDeleteModalVisible] = useState(false);
	const [vegan, setVegan] = useState(false);
	const [gasto, setGasto] = useState('');

	//Switch para vegan
	const toggleSwitch = () => {
		if (isEnabled) {
			setVegan(false);
		} else {
			setVegan(true);
		}

		setIsEnabled((previousState) => !previousState);
	};

	//Función para capturar el nombre
	const handleOnChangeInput = (value) => {
		setTextItem(value);
	};

	//Función para capturar gasto
	const handleOnChangeGasto = (number) => {
		setGasto(number);
	};

	//Función para añadir el texto capturado
	const addItem = () => {
		if (text !== '') {
			setItemList([
				...itemList,
				{ id: itemList.length + 1, value: text, gasto: gasto, vegan: vegan },
			]);
			setTextItem('');
			setGasto('');
			console.log(itemList);
		} else {
			Alert.alert('Debes ingresar un nombre');
		}
	};

	//Funcion para borrar todos los items
	const deleteAll = () => {
		setItemList([]);
	};

	//Función para borrar un item
	const handleDeleteItem = (id) => {
		const newList = itemList.filter((itemList) => itemList.id !== id);
		setSelectedItem({});
		setItemList(newList);
		setDeleteModalVisible(!modalDeleteVisible);
	};

	//Función para cerrar modal
	const cerrarModal = () => {
		setDeleteModalVisible(!modalDeleteVisible);
	};

	const onHandleDeleteModal = (id) => {
		setSelectedItem(itemList.find((itemList) => itemList.id === id));
		setDeleteModalVisible(!modalDeleteVisible);
		console.log('Selected item: ', selectedItem);
	};

	return (
		<View style={styles.container}>
			<StatusBar
				animated={true}
				backgroundColor='#ecedf1'
				hidden={false}
				barStyle={'dark-content'}
			/>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder='Agregar gasto...'
					onChangeText={handleOnChangeInput}
					autoCorrect={false}
					value={text}
					style={styles.textInput}
				/>
				<TouchableOpacity style={styles.button} onPress={() => addItem()}>
					<Text style={styles.textButton}>Agregar</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.settingsContainer}>
				<View style={styles.settingsPrice}>
					<TextInput
						placeholder='Agregar precio...'
						keyboardType='numeric'
						onChangeText={handleOnChangeGasto}
						number={gasto}
						value={gasto}
						style={styles.priceInput}
					/>
				</View>
				<View style={styles.settingsVegan}>
					<Text>¿Es vegan?</Text>
					<Switch
						trackColor={{ false: '#767577', true: '#D5D977' }}
						thumbColor={isEnabled ? '#88A61C' : '#88A61C'}
						onValueChange={toggleSwitch}
						value={isEnabled}
					/>
				</View>
			</View>
			<FlatList
				data={itemList}
				style={styles.listContainer}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => onHandleDeleteModal(item.id)}
						style={styles.touchableContainer}
					>
						<Text style={styles.itemsAgregados}>{item.value}</Text>
						{item.vegan ? (
							<Text style={styles.vegan}>Vegan</Text>
						) : (
							<Text style={styles.noVegan}>No vegan</Text>
						)}
						<Text style={styles.gasto}> $ {item.gasto}</Text>
					</TouchableOpacity>
				)}
				keyExtractor={(item) => item.id}
			/>
			<DeleteModal
				onHandleDeleteItem={handleDeleteItem}
				visible={modalDeleteVisible}
				selectedItem={selectedItem}
				onHandleCerrar={cerrarModal}
			/>
			<View style={styles.buttonContainer}>
				<CustomButton
					textButton='LIMPIAR'
					bgColor='#D60700'
					textColor='#ecedf1'
					onPressProp={deleteAll}
				/>
				<CustomButton
					textButton='CALCULAR'
					bgColor='#88A61C'
					textColor='#ecedf1'
					onPressProp={null}
				/>
			</View>
		</View>
	);
};

export default Home;
