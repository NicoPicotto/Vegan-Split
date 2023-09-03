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
import DeleteModal from '../../Components/DeleteModal';
import { useFonts } from '@expo-google-fonts/inter';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Home = ({ navigation }) => {
	const [text, setTextItem] = useState('');
	const [itemList, setItemList] = useState([]);
	const [selectedItem, setSelectedItem] = useState([]);
	const [modalDeleteVisible, setDeleteModalVisible] = useState(false);
	const [carne, setCarne] = useState(false);
	const [gasto, setGasto] = useState('');

	const [fontsLoaded] = useFonts({
		'Inter-Regular': require('../../../assets/Inter-Regular.ttf'),
		'Inter-Bold': require('../../../assets/Inter-Bold.ttf'),
		'Inter-Light': require('../../../assets/Inter-Light.ttf'),
	});

	if (!fontsLoaded) {
		return null;
	}

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
		if (text && gasto !== '') {
			setItemList([
				...itemList,
				{
					id: itemList.length + 1,
					value: text,
					gasto: parseInt(gasto),
					carne: carne,
				},
			]);
			setTextItem('');
			setGasto('');
			Keyboard.dismiss();
		} else {
			Alert.alert('Completá todos los campos');
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
			<View style={styles.inputWrapper}>
				<View style={styles.inputContainer}>
					<Text style={styles.label}>Ingresar compra</Text>
					<TextInput
						placeholder='Ej: Bebidas'
						onChangeText={handleOnChangeInput}
						autoCorrect={false}
						value={text}
						style={styles.textInput}
						selectionColor='#46563a'
					/>
				</View>
				<View style={styles.settingsContainer}>
					<View style={styles.settingsPrice}>
						<Text style={styles.label}>Ingresar precio</Text>
						<TextInput
							placeholder='Ej: 2500'
							keyboardType='numeric'
							onChangeText={handleOnChangeGasto}
							number={gasto}
							style={styles.priceInput}
							value={gasto}
							selectionColor='#46563a'
						/>
					</View>
					<View style={styles.settingsVegan}>
						<Text style={styles.labelCenter}>¿Producto Animal?</Text>
						<Switch
							trackColor={{ false: '#D2CFD4', true: '#EA8381' }}
							ios_backgroundColor='#D2CFD4'
							thumbColor={carne ? '#8C0700' : 'white'}
							onValueChange={() => setCarne(!carne)}
							value={carne}
						/>
					</View>
				</View>
				<TouchableOpacity style={styles.button} onPress={() => addItem()}>
					<Text style={styles.textButton}>AGREGAR</Text>
				</TouchableOpacity>
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
							{item.carne && (
								<MaterialCommunityIcons
									name='food-drumstick'
									size={18}
									color='#8C0700'
								/>
							)}
						</Text>
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
				<View style={styles.totalPriceContainer}>
					<FontAwesome5 name='money-bill-wave' size={18} color='white' />
					<Text style={styles.totalPrice}> TOTAL GASTADO: $ {totalPrice}</Text>
				</View>
				<View style={styles.buttonWrapper}>
					<TouchableOpacity
						style={styles.bottomButtonOutline}
						onPress={deleteAll}
					>
						<Text style={styles.textButtonOutline}>LIMPIAR</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.bottomButton}
						onPress={handleCalculate}
					>
						<Text style={styles.textButton}>SIGUIENTE</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default Home;
