// Importar librerias para hacer el componente
import React from 'react';
import { Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//Hacer el componente

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Icon 
                style={styles.menuIcon} 
                type='ionicon' 
                name="menu" 
                color="#FFF"
                size={30} 
                onPress={() => props.navigation.toggleDrawer()}
            />
            <Text style={textStyle}>{props.headerText}</Text>
        </View>    
    );    
};

const styles = {
    viewStyle: {
        backgroundColor: '#1565C0',
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        elevation: 2, //Propiedades similares a shadow
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color: '#FFF',
        fontFamily: 'sans-serif',
        fontWeight: '500'
    },

    menuIcon: {
        zIndex: 9,
        position: 'absolute',
        top: 12,
        left: 10,
    }
};

//Hacer que el componente este disponible para otras partes de la aplicacion
export default Header;
