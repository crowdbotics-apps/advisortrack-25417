import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile221115Navigator from '../features/UserProfile221115/navigator';
import Tutorial221114Navigator from '../features/Tutorial221114/navigator';
import NotificationList221086Navigator from '../features/NotificationList221086/navigator';
import Settings221085Navigator from '../features/Settings221085/navigator';
import Settings221077Navigator from '../features/Settings221077/navigator';
import UserProfile221075Navigator from '../features/UserProfile221075/navigator';
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
UserProfile221115: { screen: UserProfile221115Navigator },
Tutorial221114: { screen: Tutorial221114Navigator },
NotificationList221086: { screen: NotificationList221086Navigator },
Settings221085: { screen: Settings221085Navigator },
Settings221077: { screen: Settings221077Navigator },
UserProfile221075: { screen: UserProfile221075Navigator },
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
