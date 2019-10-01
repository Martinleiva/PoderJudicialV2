import React from "react";
import { View, Text, StatusBar, StyleSheet, Image} from "react-native";

import HederIcon from "../../components/HeaderIcon";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import datosUsuario from '../../../DatosUsuario/datos_usuario.json'
import { ScrollView } from "react-native-gesture-handler";

class InicioScreen extends React.Component {
   

    render() {
        
        return (

            <ScrollView>
                <StatusBar backgroundColor='#003C8F' barStyle='light-content' />
                <HederIcon navigation={this.props.navigation} headerText="Inicio" />

                <View style={styles.sectionOne}> 
                    <Image source={require('../../../DatosUsuario/PerfilMaxi.jpg')} style={styles.img} />
                    <Text style={styles.textOne}>{datosUsuario.datos_personales.apellidos} {datosUsuario.datos_personales.nombres}</Text>
                    <Text style={styles.textOneone}>{datosUsuario.datos_laborales.cargo.nivel}</Text>
                </View>

                <View style={styles.sectionTwo}>
                    <View style={styles.sectionTwoOne}>
                        <Icon type='material-community' size={26} color="black" name='bank' />
                        <Text style={styles.textTwo}>Dependencia</Text>
                    </View>
                    <Text style={styles.textTwoTwo}>{datosUsuario.datos_laborales.circunscripcion.dependencia}</Text>

                    <View style={styles.sectionTwoOne}> 
                        <Icon type='material-community' size={26} color="black" name='folder-account' />
                        <Text style={styles.textTwo}>N° Legajo</Text>
                    </View>
                    <Text style={styles.textTwoTree}> {datosUsuario.datos_laborales.nro_legajo} </Text>
                </View>  

                <View style={styles.sectionTwo}> 
                    <View style={styles.sectionTwoOne}>
                        <Icon type='material-community' size={26} color="black" name='map-marker' />
                        <Text style={styles.textTwo}>Domicilio </Text>
                    </View>
                    <Text style={styles.textTree}>{datosUsuario.datos_personales.domicilio} </Text>
                </View>

                <View style={styles.sectionTwo}>
                    <View style={styles.sectionTwoOne}>
                        <Icon type='material-community' size={26} color="black" name='phone' />
                        <Text style={styles.textTwo}>Telefono/s </Text>
                    </View>
                    <Text style={styles.textTree}> {datosUsuario.datos_personales.tel_fijo} - {datosUsuario.datos_personales.tel_fijo}</Text>
                </View>

                <View style={styles.sectionTwo}>
                    <View style={styles.sectionTwoOne}>
                        <Icon type='material-community' size={26} color="black" name='email' /> 
                        <Text style={styles.textTwo}>Email </Text>
                    </View>
                    <Text style={styles.textTree}>{datosUsuario.usuario} </Text>
                </View>

            </ScrollView>
                
        );
    }
}

export default InicioScreen;

const styles = StyleSheet.create({
   
    sectionOne: {
        flex: 1,
        margin: 5,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderBottomWidth: 0.5,
        borderBottomColor: '#BBBBBB'
    },
    textOne: {
        paddingVertical: 5,
    },
    textOneone: {
        paddingVertical: 5,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    img: {
        height: 100,
        width: 100,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 99,
    },
    sectionTwo: {
        flex: 1,
        margin: 5,
        paddingLeft: 5,
        paddingBottom: 10,
        flexDirection: 'column',
        borderBottomWidth: 0.5,
        borderBottomColor: '#BBBBBB',
        
    },
    sectionTwoOne:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 50,
        paddingLeft: 8
        
    },
    textTwo: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 5,
    },
    textTwoTwo: {
        textTransform: 'uppercase',
        paddingLeft: 10,
        fontSize: 14,
    },
    textTwoTree: {
        fontSize: 16,
        paddingLeft: 10,
    },
    textTree: {
        fontSize: 14,
        paddingLeft: 10,
    },
});