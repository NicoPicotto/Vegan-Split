import { View, Text, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { styles } from './styles';
import CustomButton from '../../Components/Button';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Calculate = ({ navigation, total, array }) => {
	const route = useRoute();

	const [personas, setPersonas] = useState(1);
	const [veganos, setVeganos] = useState(1);
	const [totalPriceCarnacas, setTotalPriceCarnacas] = useState(0);
	const [totalPriceVeganos, setTotalPriceVeganos] = useState(0);

	//Guardando el array y el precio total recibido en constantes
	const totalProducts = route.params.array;
	const totalPrice = route.params.total;

	//Calcular qué productos son veganos
	const filteredVegan = totalProducts.filter((vegan) => vegan.vegan == true);

	//Incrementar numero de carnacas
	const incrementPerson = () => {
		setPersonas(personas + 1);
	};

	//Decrementar numero de carnacas
	const decrementPerson = () => {
		if (personas > 1) {
			setPersonas(personas - 1);
		}
	};

	//Incrementar numero de veganos
	const incrementVeganos = () => {
		setVeganos(veganos + 1);
	};

	//Decrementar numero de veganos
	const decrementVeganos = () => {
		if (veganos > 1) {
			setVeganos(veganos - 1);
		}
	};

	//Volver a la pantalla anterior
	const onHandleBack = () => {
		navigation.navigate('Home');
	};

	//Funcion para calcular todo
	const calcularTodo = () => {
		//Setear cuanto pagan los veganos
		let veganProductPrice = filteredVegan.reduce((total, item) => {
			return total + item.gasto;
		}, 0);

		//División para veganos
		let veganEach = veganProductPrice / (personas + veganos);

		//División para carnacas
		let carnacaTotalPrice = totalPrice - veganProductPrice;
		let carnacaEach = carnacaTotalPrice / personas + veganEach;

		//Redondeos
		let veganRounded = veganEach.toFixed(2);
		let carnacaRounded = carnacaEach.toFixed(2);

		//Actualizando los estados
		setTotalPriceVeganos(veganRounded);
		setTotalPriceCarnacas(carnacaRounded);
	};

	return (
		<View style={styles.container}>
			<View style={styles.dataContainer}>
				<View style={styles.totalPriceContainer}>
					<FontAwesome5 name='money-bill-wave' size={18} color='#46563a' />
					<Text style={styles.totalPrice}> TOTAL GASTADO: $ {totalPrice}</Text>
				</View>
				<Text style={styles.cuantos}>¿Cuántos son?</Text>
			</View>
			<View style={styles.personContainer}>
				<View style={styles.carnacasContainer}>
					<Text style={styles.boxTitle}>
						<MaterialCommunityIcons
							name='food-drumstick'
							size={24}
							color='#8C0700'
						/>{' '}
						Carnacas
					</Text>
					<Text style={styles.counter}>{personas}</Text>
					<View style={styles.buttonContainer}>
						<TouchableOpacity
							style={styles.decrement}
							onPress={decrementPerson}
						>
							<Text style={styles.buttonText}>-</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.increment}
							onPress={incrementPerson}
						>
							<Text style={styles.buttonText}>+</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.veganContainer}>
					<Text style={styles.boxTitle}>
						<MaterialCommunityIcons name='leaf' size={24} color='#46563a' />{' '}
						Veganos
					</Text>
					<Text style={styles.counter}>{veganos}</Text>
					<View style={styles.buttonContainer}>
						<TouchableOpacity
							style={styles.decrement}
							onPress={decrementVeganos}
						>
							<Text style={styles.buttonText}>-</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.increment}
							onPress={incrementVeganos}
						>
							<Text style={styles.buttonText}>+</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View style={styles.personContainer}>
				<View style={styles.carnacasResult}>
					{totalPriceCarnacas ? (
						<View style={styles.resultContainer}>
							<Text style={styles.cuantoPagan}>Paga c/u </Text>
							<Text style={styles.cuantoPrecio}>${totalPriceCarnacas}</Text>
						</View>
					) : null}
				</View>
				<View style={styles.veganResult}>
					{totalPriceVeganos ? (
						<View style={styles.resultContainer}>
							<Text style={styles.cuantoPagan}>Paga c/u</Text>
							<Text style={styles.cuantoPrecio}>${totalPriceVeganos}</Text>
						</View>
					) : null}
				</View>
			</View>
			<View style={styles.buttonContainer}>
				<CustomButton
					textButton='VOLVER'
					bgColor='#8C0700'
					textColor='gainsboro'
					onPressProp={onHandleBack}
				/>
				<CustomButton
					textButton='CALCULAR'
					bgColor='#46563a'
					textColor='gainsboro'
					onPressProp={calcularTodo}
				/>
			</View>
		</View>
	);
};

export default Calculate;
