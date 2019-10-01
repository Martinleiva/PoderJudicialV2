import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";

import HederIcon from "../../components/HeaderIcon";
import datosUsuario from '../../../DatosUsuario/datos_usuario.json';
import { ScrollView } from "react-native-gesture-handler";


class DatosLaboralCirc extends React.Component {

    render() {

        return (
            <ScrollView> 
                <StatusBar backgroundColor='#003C8F' barStyle='light-content' />
                <HederIcon navigation={this.props.navigation} headerText="Datos de la Dependencia" />
                
                <View style={styles.containerOne}>
                    <Text style={styles.labelText}>Circunscripción: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_laborales.circunscripcion.tipo}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Unidad: </Text>
                    <Text style={styles.infoTextOne}>{datosUsuario.datos_laborales.circunscripcion.unidad}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Organismo: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_laborales.circunscripcion.organismo}</Text>
                </View>

                <View style={styles.containerOne}>
                    <Text style={styles.labelText}>Dependencia: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_laborales.circunscripcion.dependencia}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Dirección: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_laborales.circunscripcion.direccion}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Departamento: </Text>
                    <Text style={styles.infoTextOne}>{datosUsuario.datos_laborales.circunscripcion.departamento}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>División: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_laborales.circunscripcion.division}</Text>
                </View>

                <View style={styles.containerOne}>
                    <Text style={styles.labelText}>Fecha ingreso a la dependencia: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_laborales.circunscripcion.fecha_ingreso_dependencia}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Tipo instrumento legal: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_laborales.circunscripcion.tipo_instrumento_legal}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Instrumento legal: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_laborales.circunscripcion.instrumento_legal}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Fecha instrumento legal: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_laborales.circunscripcion.fecha_instrumento_legal}</Text>
                </View>

            </ScrollView>
        );
    }
    
}

export default DatosLaboralCirc;

const styles = StyleSheet.create({
    containerOne: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: 50,
        paddingLeft: 15,
        marginTop: 10,
    },
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