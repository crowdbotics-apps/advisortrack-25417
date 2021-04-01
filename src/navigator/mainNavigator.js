import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile221044Navigator from '../features/UserProfile221044/navigator';
import Tutorial221043Navigator from '../features/Tutorial221043/navigator';
import NotificationList221015Navigator from '../features/NotificationList221015/navigator';
import Settings221014Navigator from '../features/Settings221014/navigator';
import Settings221006Navigator from '../features/Settings221006/navigator';
import UserProfile221004Navigator from '../features/UserProfile221004/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile221044: { screen: UserProfile221044Navigator },
Tutorial221043: { screen: Tutorial221043Navigator },
NotificationList221015: { screen: NotificationList221015Navigator },
Settings221014: { screen: Settings221014Navigator },
Settings221006: { screen: Settings221006Navigator },
UserProfile221004: { screen: UserProfile221004Navigator },

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
