import {
	TouchableOpacity,
	View,
	Text,
	Alert,
	FlatList,
	Switch,
	TextInput,
	Keyboard,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import CustomButton from '../../Components/Button';
import DeleteModal from '../../Components/DeleteModal';
import AppLoading from 'expo-app-loading';
import {
	useFonts,
	Inter_700Bold,
	Inter_400Regular,
} from '@expo-google-fonts/inter';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Home = ({ navigation }) => {
	const [text, setTextItem] = useState('');
	const [itemList, setItemList] = useState([]);
	const [selectedItem, setSelectedItem] = useState([]);
	const [isEnabled, setIsEnabled] = useState(false);
	const [modalDeleteVisible, setDeleteModalVisible] = useState(false);
	const [vegan, setVegan] = useState(false);
	const [gasto, setGasto] = useState('');

	let [fontsLoaded] = useFonts({
		Inter_700Bold,
		Inter_400Regular,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	//Switch para vegan
	const toggleSwitch = () => {
		if (isEnabled) {
			setVegan(false);
		} else {
			setVegan(true);
		}

		setIsEnabled((previousState) => !previousState);
	};

	//Precio total
	const totalPrice = itemList.reduce((total, item) => {
		return total + item.gasto;
	}, 0);

	//Función para capturar el nombre
	const handleOnChangeInput = (value) => {
		setTextItem(value);
	};

	//Función para capturar gasto
	const handleOnChangeGasto = (number) => {
		setGasto(number);
	};

	//Función para añadir el item a la lista
	const addItem = () => {
		if (text !== '') {
			setItemList([
				...itemList,
				{
					id: itemList.length + 1,
					value: text,
					gasto: parseInt(gasto),
					vegan: vegan,
				},
			]);
			setTextItem('');
			setGasto('');
			Keyboard.dismiss();
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

	//Función para abrir el modal con los detalles
	const onHandleDeleteModal = (id) => {
		setSelectedItem(itemList.find((itemList) => itemList.id === id));
		setDeleteModalVisible(!modalDeleteVisible);
	};

	//Función para ir a la screen Calculate
	const handleCalculate = () => {
		navigation.navigate('Calculate', {
			total: totalPrice,
			array: itemList,
		});
	};

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder='Agregar gasto...'
					onChangeText={handleOnChangeInput}
					autoCorrect={false}
					value={text}
					style={styles.textInput}
					selectionColor='#46563a'
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
						style={styles.priceInput}
						value={gasto}
						selectionColor='#46563a'
					/>
				</View>
				<View style={styles.settingsVegan}>
					<Text style={styles.veganQuestion}>¿Es vegan?</Text>
					<Switch
						trackColor={{ false: '#9F3530', true: '#7E9C68' }}
						thumbColor={isEnabled ? '#46563a' : '#dfdfdf'}
						onValueChange={toggleSwitch}
						value={isEnabled}
						style={styles.switch}
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
						<Text style={styles.itemsAgregados}>
							{item.value}{' '}
							{item.vegan ? (
								<MaterialCommunityIcons name='leaf' size={20} color='#46563a' />
							) : null}
						</Text>
						<Text style={styles.gasto}> $ {item.gasto}</Text>
					</TouchableOpacity>
				)}
				keyExtractor={(item) => item.id}
			/>
			<View style={styles.totalPriceContainer}>
				<FontAwesome5 name='money-bill-wave' size={18} color='#46563a' />
				<Text style={styles.totalPrice}> TOTAL GASTADO: $ {totalPrice}</Text>
			</View>
			<DeleteModal
				onHandleDeleteItem={handleDeleteItem}
				visible={modalDeleteVisible}
				selectedItem={selectedItem}
				onHandleCerrar={cerrarModal}
			/>
			<View style={styles.buttonContainer}>
				<CustomButton
					textButton='LIMPIAR'
					bgColor='#8C0700'
					textColor='gainsboro'
					onPressProp={deleteAll}
				/>
				<CustomButton
					textButton='SIGUIENTE'
					bgColor='#46563a'
					textColor='gainsboro'
					onPressProp={handleCalculate}
				/>
			</View>
		</View>
	);
};

export default Home;
