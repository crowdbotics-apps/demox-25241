import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile218229Navigator from '../features/UserProfile218229/navigator';
import Settings218228Navigator from '../features/Settings218228/navigator';
import Settings218226Navigator from '../features/Settings218226/navigator';
import SignIn2218224Navigator from '../features/SignIn2218224/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile218229: { screen: UserProfile218229Navigator },
Settings218228: { screen: Settings218228Navigator },
Settings218226: { screen: Settings218226Navigator },
SignIn2218224: { screen: SignIn2218224Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
