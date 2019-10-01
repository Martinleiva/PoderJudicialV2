import React from "react";
import { StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class MenuButton extends React.Component {
   
    render() {

        return (
            <Icon 
                style={styles.menuIcon} 
                type='ionicon' 
                name="menu" 
                color="#000"
                size={32} 
                onPress={() => this.props.navigation.toggleDrawer()}
            />
        );
    }
}

export default MenuButton;

const styles = StyleSheet.create({
    menuIcon: {
        zIndex: 9,
        position: 'absolute',
        top: 12,
        left: 10,
    }
});