import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Button} from "react-native";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import AsyncStorage from '@react-native-community/async-storage';

class DrawerScreen extends React.Component {

    newLink(nav, text, icon){

        return(
            <TouchableOpacity style={styles.touch} onPress={() => this.props.navigation.navigate(nav)}>
                <Icon type='material-community' size={26} color="#595959" name={icon} />
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        );
    }

    _logOut = async() => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Acceso')
    }

        
    render() {

        return (
            <View style={styles.container}>
                    <View style={styles.topLinks}>
                        <View style={styles.header}> 
                            <View style={styles.imgView}>
                                <Image style={styles.img} source={require('../../img/catamarca.jpg')} />
                            </View>
                            <View style={styles.headerText}> 
                                <Text style={styles.name}>Poder Judicial Catamarca </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomLinks}>
                        {this.newLink('Inicio', 'Inicio','home')}
                        {this.newLink('DetallePersonal', 'Datos Personales','account')}
                        {this.newLink('DetalleLaboral', 'Datos Laborales','folder')}
                        {this.newLink('Inicio', 'Licencias','library-books')}
                        {this.newLink('Inicio', 'Grupo Familiar','account-multiple')}
                        {this.newLink('Inicio', 'Titulos','school')}
                        {this.newLink('Inicio', 'Antecedentes','backup-restore')}
                        {this.newLink('Inicio', 'Notificaciones','bell')}
                    </View>    

                    <View style={styles.footer}>    
                    <TouchableOpacity style={styles.touch} onPress={this._logOut}>
                        <Icon type='material-community' size={26} color="#595959" name='logout' />
                        <Text style={styles.link}>Cerrar sesión</Text>
                    </TouchableOpacity>
                    </View>

            </View>
        );
    }
}

export default DrawerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#000'
    },
    touch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 50,
        paddingLeft: 8
    },
    topLinks: {
        height: 140,
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
        borderBottomColor: '#777777',
        
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    imgView: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    img: {
        height: 100,
        width: 100,
    },
    headerText: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        paddingBottom: 5,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    bottomLinks: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 5,
        paddingBottom: 5,

    },
    link: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 10,
        margin: 5,
        textAlign: 'left',
        color: '#070707',
        fontWeight:'bold'
    },
    footer: {
        borderTopWidth: 0.5,
        borderTopColor: '#777777',
    }, 
    botonStyle: {

    }
});
