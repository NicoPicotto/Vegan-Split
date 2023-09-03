import { View, Text, Modal, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';

const DeleteModal = ({
	selectedItem,
	onHandleDeleteItem,
	visible,
	onHandleCerrar,
}) => {
	return (
		<Modal animationType='fade' visible={visible}>
			<View style={styles.modalContainerContent}>
				<View style={styles.modalContent}>
					<Text style={styles.nombreModal}>{selectedItem.value} </Text>
					<Text style={styles.precioModal}>$ {selectedItem.gasto}</Text>
				</View>
				<View style={styles.modalButton}>
					<TouchableOpacity
						style={styles.bottomButtonOutline}
						onPress={onHandleCerrar}
					>
						<Text style={styles.textButtonOutline}>VOLVER</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.bottomButton}
						onPress={() => onHandleDeleteItem(selectedItem.id)}
					>
						<Text style={styles.textButton}>ELIMINAR</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
};

export default DeleteModal;
