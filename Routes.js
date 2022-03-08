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
import RootStackScreen from "./screens/RootStackScreen";
import {useAuth} from "./context/auth-context";
import MainTabScreen from "./screens/MainTabScreen";
import SupportScreen from "./screens/SupportScreen";
import SettingsScreen from "./screens/SettingsScreen";
import BookmarkScreen from "./screens/BookmarkScreen";
import DetailsScreen from "./screens/Components/DetailsScreen";
import Icon from "react-native-vector-icons/Ionicons";
import {createStackNavigator} from "@react-navigation/stack";

const Drawer = createDrawerNavigator();
const DetailsStack = createStackNavigator();

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
                            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
                            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
                            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
                            <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
                            <Drawer.Screen name="Details" component={DetailsStackScreen} />
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


const DetailsStackScreen = ({navigation}) => (
    <DetailsStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}/>
            )
        }} />
    </DetailsStack.Navigator>
);
