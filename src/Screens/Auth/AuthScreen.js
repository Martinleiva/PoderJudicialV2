import React from "react";
import { View, ActivityIndicator, StatusBar, StyleSheet } from "react-native";

import AsyncStorage from '@react-native-community/async-storage';

import datosUsuario from '../../../DatosUsuario/datos_usuario.json';

class AuthScreen extends React.Component {

    constructor(props){
        super(props);
        this._loadData();
    }

    render() {

        return (
            <View style={styles.container}> 
                <StatusBar backgroundColor='#003C8F' barStyle='light-content' />
                <ActivityIndicator color='#003C8F' size="large" />
            </View>
        );
    }

    _loadData = async() => {
        const Logeado = await AsyncStorage.getItem('Logeado');
        this.props.navigation.navigate(Logeado !== datosUsuario.id ? 'Acceso' : 'Home')
    }
    
}

export default AuthScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});