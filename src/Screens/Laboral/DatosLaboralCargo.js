import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";

import HederIcon from "../../components/HeaderIcon";
import datosUsuario from '../../../DatosUsuario/datos_usuario.json';

class DatosLaboralCargo extends React.Component {

    render() {

        return (
            <View> 
                <StatusBar backgroundColor='#003C8F' barStyle='light-content' />
                <HederIcon navigation={this.props.navigation} headerText="Datos del Cargo" />
                
                <View style={styles.container}>
                    <Text style={styles.labelText}>Cargo: </Text>
                    <Text style={styles.infoTextOne}>{datosUsuario.datos_laborales.cargo.nivel}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Nivel: </Text>
                    <Text style={styles.infoTextOne}>{datosUsuario.datos_laborales.cargo.nivel}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Agrupamiento: </Text>
                    <Text style={styles.infoTextOne}>{datosUsuario.datos_laborales.cargo.agrupamiento}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Situación laboral: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_laborales.cargo.situacion_laboral}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Jurisdicción: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_laborales.cargo.jurisdiccion}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Fecha de ingreso al cargo: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_laborales.fecha_ingreso}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Tipo instrumento legal: </Text>
                    <Text style={styles.infoTextOne}>{datosUsuario.datos_laborales.cargo.tipo_instrumento_legal}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Instrumento legal: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_laborales.cargo.instrumento_legal}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Fecha instrumento legal: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_laborales.cargo.fecha_instrumento_legal}</Text>
                </View>

            </View>
        );
    }
    
}

export default DatosLaboralCargo;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 50,
        paddingLeft: 15,
    },
    infoTextOne: {
        textTransform: 'uppercase',
        fontSize: 18,
    },
    labelText:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    infoText: {
        fontSize: 16,
    }
});