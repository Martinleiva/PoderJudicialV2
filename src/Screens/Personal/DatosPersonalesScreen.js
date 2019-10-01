import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";

import HederIcon from "../../components/HeaderIcon";

import datosUsuario from '../../../DatosUsuario/datos_usuario.json';
import { ScrollView } from "react-native-gesture-handler";

class DatosPersonalesScreen extends React.Component {

    render() {

        return (
            <ScrollView> 
                <StatusBar backgroundColor='#003C8F' barStyle='light-content' />
                <HederIcon navigation={this.props.navigation} headerText="Datos Personales"/>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Apellido/s: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_personales.apellidos}</Text>
                </View>    

                <View style={styles.container}>
                    <Text style={styles.labelText}>Nombres/s: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_personales.nombres}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>N° Documento: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_personales.nro_doc}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Tipo documento: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_personales.tipo_doc}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>N° CUIL: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_personales.nro_cuil}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Sexo: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_personales.sexo}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Estado civil: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_personales.estado_civil}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Nacionalidad: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_personales.nacionalidad}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Fecha de nacimiento: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_personales.fecha_nacimiento}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Lugar de nacimiento: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_personales.lugar_nacimiento}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Telefono fijo: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_personales.tel_fijo}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Teléfono celular: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_personales.tel_celular}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Email: </Text>
                    <Text style={styles.infoText}>{datosUsuario.usuario}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Domicilio: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_personales.domicilio}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Barrio: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_personales.barrio}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Localidad: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_personales.localidad}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Codigo postal: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_personales.codigo_postal}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Departamento: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_personales.departamento}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.labelText}>Provincia: </Text>
                    <Text style={styles.infoText}>{datosUsuario.datos_personales.provincia}</Text>
                </View>

            </ScrollView>
        );
    }
    
}

export default DatosPersonalesScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 50,
        paddingLeft: 15,
    },
    labelText:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    infoText: {
        fontSize: 16,
    }
});