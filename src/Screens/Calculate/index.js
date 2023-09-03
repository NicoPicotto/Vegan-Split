import { View, Text, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { styles } from './styles';
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
	const filteredVegan = totalProducts.filter((prod) => prod.carne == false);

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
		let veganRounded = veganEach.toFixed(0);
		let carnacaRounded = carnacaEach.toFixed(0);

		//Actualizando los estados
		setTotalPriceVeganos(veganRounded);
		setTotalPriceCarnacas(carnacaRounded);
	};

	return (
		<View style={styles.container}>
			<View style={styles.calculateWrapper}>
				<View style={styles.personContainer}>
					<View style={styles.personWrapperCarne}>
						<Text style={styles.boxTitle}>
							<MaterialCommunityIcons
								name='food-drumstick'
								size={18}
								color='#8C0700'
							/>{' '}
							Carnacas
						</Text>
						<Text style={styles.counter}>{personas}</Text>
						<View style={styles.buttonCalculateContainer}>
							<TouchableOpacity
								style={styles.priceButtonOutline}
								onPress={decrementPerson}
							>
								<Text style={styles.buttonText}>-</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.priceButtonOutline}
								onPress={incrementPerson}
							>
								<Text style={styles.buttonText}>+</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.personWrapper}>
						<Text style={styles.boxTitle}>
							<MaterialCommunityIcons name='leaf' size={18} color='#46563a' />{' '}
							Veganos
						</Text>
						<Text style={styles.counter}>{veganos}</Text>
						<View style={styles.buttonCalculateContainer}>
							<TouchableOpacity
								style={styles.priceButtonOutline}
								onPress={decrementVeganos}
							>
								<Text style={styles.buttonText}>-</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.priceButtonOutline}
								onPress={incrementVeganos}
							>
								<Text style={styles.buttonText}>+</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View style={styles.totalResultContainer}>
					{totalPriceCarnacas ? (
						<View style={styles.resultWrapper}>
							<View style={styles.resultContainer}>
								<Text style={styles.cuantoPagan}>Paga c/u </Text>
								<Text style={styles.cuantoPrecio}>${totalPriceCarnacas}</Text>
							</View>
						</View>
					) : null}
					{totalPriceVeganos ? (
						<View style={styles.resultWrapper}>
							<View style={styles.resultContainer}>
								<Text style={styles.cuantoPagan}>Paga c/u</Text>
								<Text style={styles.cuantoPrecio}>${totalPriceVeganos}</Text>
							</View>
						</View>
					) : null}
				</View>
			</View>
			<View style={styles.buttonContainer}>
				<View style={styles.totalPriceContainer}>
					<FontAwesome5 name='money-bill-wave' size={18} color='white' />
					<Text style={styles.totalPrice}> TOTAL GASTADO: $ {totalPrice}</Text>
				</View>
				<View style={styles.buttonWrapper}>
					<TouchableOpacity
						style={styles.bottomButtonOutline}
						onPress={onHandleBack}
					>
						<Text style={styles.textButtonOutline}>VOLVER</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.bottomButton} onPress={calcularTodo}>
						<Text style={styles.textButton}>CALCULAR</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default Calculate;
