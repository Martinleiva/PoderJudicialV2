import React from "react";
import { View, Text, StatusBar, TouchableOpacity, TextInput, StyleSheet } from "react-native";

import Logo from '../../components/Logo';
import Header from '../../components/Header';

import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import datosUsuario from '../../../DatosUsuario/datos_usuario.json';

class AccesoScreen extends React.Component {

    state = {email: '', password: ''}

    render() {

        return (
           
            <ScrollView style={styles.scrollStyle}>
                <Header headerText='Acceso' />
                <StatusBar backgroundColor='#003C8F' barStyle='light-content' />

                <Logo />

                <View style={styles.container}> 
                    <TextInput 
                        style={styles.inputBox} 
                        underlineColorAndroid='#1e88e5' 
                        placeholder="Usuario"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={(email) => this.setState({ email })}
                        onSubmitEditing={() => this.password.focus()}
                    />
                    <TextInput 
                        style={styles.inputBox} 
                        secureTextEntry
                        underlineColorAndroid='#1e88e5' 
                        placeholder="Contraseña" 
                        autoCapitalize="none"
                        onChangeText={(password) => this.setState({ password })}
                        ref={(input) => this.password = input}
                    />

                    <TouchableOpacity style={styles.button} onPress={this._login}>
                        <Text style={styles.buttonText}>ENTRAR</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
            
        );
    }

    _login = async() => {
        if (datosUsuario.usuario === this.state.email && datosUsuario.password === this.state.password){
            await AsyncStorage.setItem('Logeado', datosUsuario.id)
            this.props.navigation.navigate('Inicio');
        } else {
            alert('Email o Contraseña incorrecta')
        }
    }
    
}

export default AccesoScreen;

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
    
    inputBox: {
        width: 310,
        fontSize: 20,
        paddingHorizontal: 10,
        marginVertical: 10
    },

    button: {
        backgroundColor: '#1565C0',
        marginVertical: 25,
        paddingTop: 10,
        paddingRight: 110,
        paddingBottom: 10,
        paddingLeft: 110,
        borderRadius: 5,
    },
    
    buttonText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
    },
    
    scrollStyle: {
      backgroundColor:'#fff'
    }

});