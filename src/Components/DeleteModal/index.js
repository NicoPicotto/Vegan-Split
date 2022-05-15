import { View, Text, Modal, Button } from 'react-native';
import React from 'react';
import { styles } from './styles';
import CustomButton from '../Button';

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
					<CustomButton
						textButton='ELIMINAR'
						bgColor='#D60700'
						textColor='#ecedf1'
						onPressProp={() => onHandleDeleteItem(selectedItem.id)}
					/>
					<CustomButton
						textButton='CERRAR'
						bgColor='grey'
						textColor='#ecedf1'
						onPressProp={onHandleCerrar}
					/>
				</View>
			</View>
		</Modal>
	);
};

export default DeleteModal;
