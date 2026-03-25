import { View, Text, StyleSheet, Dimensions, Alert, Modal, Button } from 'react-native'
import React, { useState } from 'react'
import { Camera, CameraType, CameraView, useCameraPermissions } from 'expo-camera';

type Props = {}

const BarcodeScanner = (props: Props) => {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [modalVisible, setModalVisible] = useState<boolean>(false)

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }
    return (
        <View style={{ flex: 1 }}>
            <Text>BarcodeScanner</Text>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}></Modal>
            <CameraView style={styles.cam} facing={facing} barcodeScannerSettings={
                { barcodeTypes: ['ean8', 'ean13', 'upc_a', 'upc_e'] }
            }
                onBarcodeScanned={(evt) => {
                    console.log(evt)
                    setModalVisible(true)
                }} />
        </View>
    )
}

export default BarcodeScanner

const styles = StyleSheet.create({
    cam: {
        height: Dimensions.get('screen').height - 100,
        width: Dimensions.get('screen').width,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    }, message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
})