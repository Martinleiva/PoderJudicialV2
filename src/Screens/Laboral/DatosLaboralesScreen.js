import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";

import HederIcon from "../../components/HeaderIcon";
import datosUsuario from '../../../DatosUsuario/datos_usuario.json';


class DatosLaboralesScreen extends React.Component {

    render() {

        return (
            <View> 
                <StatusBar backgroundColor='#003C8F' barStyle='light-content' />
                <HederIcon navigation={this.props.navigation} headerText="Datos Laborales" />

                <View style={styles.container}>
                    <Text style={styles.labelText}>Estado laboral actual: </Text>
                    <Text style={styles.infoTextOne}>{datosUsuario.datos_laborales.estado_lab_actual}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Último cambio de estado: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_laborales.ult_cambio_estado}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>N° Legajo: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_laborales.nro_legajo}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Antiguedad: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_laborales.antiguedad}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Antiguedad en otros cargos: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_laborales.antiguedad_otros_cargos}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Horario laboral: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_laborales.horario}</Text>
                </View>

            </View>
        );
    }
    
}

export default DatosLaboralesScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 50,
        paddingLeft: 15,
    },
    infoTextOne: {
        color: 'green',
        fontWeight: 'bold',
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