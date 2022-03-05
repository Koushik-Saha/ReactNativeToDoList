import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {
    NavigationContainer,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
    Provider as PaperProvider,
} from 'react-native-paper';
import {DrawerContent} from './screens/DrawerContent';
// import MainTabScreen from './screens/MainTabScreen';
// import SupportScreen from './screens/SupportScreen';
// import SettingsScreen from './screens/SettingsScreen';
// import BookmarkScreen from './screens/BookmarkScreen';
import {AuthContext} from './context/context';
// import RootStackScreen from './screens/RootStackScreen';
import RootStackScreen from "./screens/RootStackScreen";
import {AuthProvider, useAuth} from "./context/auth-context";

const Drawer = createDrawerNavigator();

const Routes = () => {

    const {loginState, theme} = useAuth()

    if (loginState.isLoading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large"/>
            </View>
        );
    }
    return (
        <PaperProvider theme={theme}>
            <NavigationContainer theme={theme}>
                {loginState.userToken !== null ? (
                        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                            {/*<Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
                                    <Drawer.Screen name="SupportScreen" component={SupportScreen} />
                                    <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
                                    <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />*/}
                        </Drawer.Navigator>
                    )
                    :
                    <RootStackScreen/>
                }
            </NavigationContainer>
        </PaperProvider>
    );
}

export default Routes;
