import React from "react";
import { 
  createSwitchNavigator, 
  createAppContainer, 
  createDrawerNavigator, 
  createMaterialTopTabNavigator
} from "react-navigation";


import AccesoScreen from './src/Screens/Acceso/AccesoScreen';
import InicioScreen from './src/Screens/Inicio/InicioScreen';
import DrawerScreen from './src/Screens/Drawer/DrawerScreen';
import DatosPersonalesScreen from './src/Screens/Personal/DatosPersonalesScreen';
import DatosLaboralesScreen from './src/Screens/Laboral/DatosLaboralesScreen';
import DatosLaboralCargo from './src/Screens/Laboral/DatosLaboralCargo';
import DatosLaboralCirc from './src/Screens/Laboral/DatosLaboralCirc';
import AuthScreen from './src/Screens/Auth/AuthScreen';

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['ViewPagerAndroid']);

class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}


export default App;

const DatosLaboralesNav = createMaterialTopTabNavigator({
  Laboral: DatosLaboralesScreen,
  Cargo: DatosLaboralCargo,
  Dependencia: DatosLaboralCirc
},{
  tabBarPosition: 'bottom',
  defaultNavigationOptions:  {
      tabBarOptions: {
        style: {
          backgroundColor: '#1565C0',
        },
        labelStyle: {
          fontSize: 11,
        }
      }
  }
});

const AppDrawerNav = createDrawerNavigator({

  Inicio: InicioScreen,
  DetallePersonal: DatosPersonalesScreen,
  DetalleLaboral: DatosLaboralesNav 

}, {
  contentComponent: DrawerScreen
});

const AppSwitchNav = createSwitchNavigator({

  Auth: AuthScreen,
  Acceso: AccesoScreen,
  Home: AppDrawerNav

});

const AppContainer = createAppContainer(AppSwitchNav);

