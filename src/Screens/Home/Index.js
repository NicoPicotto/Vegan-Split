import {
	TouchableOpacity,
	View,
	Text,
	Alert,
	FlatList,
	Switch,
	TextInput,
	Modal,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import FriendInput from '../../Components/Input';
import CustomButton from '../../Components/Button';

const Home = ({ navigation }) => {
	const [text, setTextItem] = useState('');
	const [itemList, setItemList] = useState([]);
	const [isEnabled, setIsEnabled] = useState(false);
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

	//Función para entrar al detalle
	const onSelectDetail = (item) => {
		navigation.navigate('Detail', {
			name: item.name,
		});
	};

	//Funcion para borrar item
	const deleteAll = () => {
		setItemList([]);
	};

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder='Agregar amigo...'
					onChangeText={handleOnChangeInput}
					autoCorrect={false}
					value={text}
					style={styles.textInput}
				/>
				<TouchableOpacity style={styles.button} onPress={() => addItem()}>
					<Text>+</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.settingsContainer}>
				<Text>Gastó</Text>
				<TextInput
					placeholder='$0.00'
					keyboardType='numeric'
					onChangeText={handleOnChangeGasto}
					number={gasto}
                    value={gasto}
				/>
				<Text>¿Es vegan?</Text>
				<Switch
					trackColor={{ false: '#767577', true: '#f3b52e' }}
					thumbColor={isEnabled ? '#f3b52e' : '#f3b52e'}
					onValueChange={toggleSwitch}
					value={isEnabled}
				/>
			</View>
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
							<Text style={styles.vegan}>Vegan</Text>
						) : (
							<Text style={styles.noVegan}>No vegan</Text>
						)}
						<Text style={styles.gasto}> $ {item.gasto}</Text>
					</TouchableOpacity>
				)}
				keyExtractor={(item) => item.id}
			/>
			<View style={styles.buttonContainer}>
				<CustomButton
					textButton='LIMPIAR'
					bgColor='red'
					textColor='#ecedf1'
					onPressProp={deleteAll}
				/>
				<CustomButton
					textButton='CALCULAR'
					bgColor='#f3b52e'
					textColor='black'
					onPressProp={onSelectDetail}
				/>
			</View>
		</View>
	);
};

export default Home;
