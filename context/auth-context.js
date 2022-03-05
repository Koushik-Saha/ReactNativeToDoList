import React, {useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme} from "@react-navigation/native";
import {DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme} from "react-native-paper";


const AuthContext = React.createContext();

const AuthProvider = (props) => {

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const initialLoginState = {
        isLoading: true,
        userName: null,
        userToken: null,
    };

    const CustomDefaultTheme = {
        ...NavigationDefaultTheme,
        ...PaperDefaultTheme,
        colors: {
            ...NavigationDefaultTheme.colors,
            ...PaperDefaultTheme.colors,
            background: '#ffffff',
            text: '#333333'
        }
    }

    const CustomDarkTheme = {
        ...NavigationDarkTheme,
        ...PaperDarkTheme,
        colors: {
            ...NavigationDarkTheme.colors,
            ...PaperDarkTheme.colors,
            background: '#333333',
            text: '#ffffff'
        }
    }

    const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

    const loginReducer = (prevState, action) => {
        switch( action.type ) {
            case 'RETRIEVE_TOKEN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGIN':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGOUT':
                return {
                    ...prevState,
                    userName: null,
                    userToken: null,
                    isLoading: false,
                };
            case 'REGISTER':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
        }
    };

    const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

    React.useMemo(() => ({
        signIn: async(foundUser) => {
            // setUserToken('fgkj');
            // setIsLoading(false);
            const userToken = String(foundUser[0].userToken);
            const userName = foundUser[0].username;

            try {
                await AsyncStorage.setItem('userToken', userToken);
            } catch(e) {
                console.log(e);
            }
            // console.log('user token: ', userToken);
            dispatch({ type: 'LOGIN', id: userName, token: userToken });
        },
        signOut: async() => {
            // setUserToken(null);
            // setIsLoading(false);
            try {
                await AsyncStorage.removeItem('userToken');
            } catch(e) {
                console.log(e);
            }
            dispatch({ type: 'LOGOUT' });
        },
        signUp: () => {
            // setUserToken('fgkj');
            // setIsLoading(false);
        },
        toggleTheme: () => {
            setIsDarkTheme( isDarkTheme => !isDarkTheme );
        }
    }), []);

    useEffect(() => {
        setTimeout(async() => {
            // setIsLoading(false);
            let userToken;
            userToken = null;
            try {
                userToken = await AsyncStorage.getItem('userToken');
            } catch(e) {
                console.log(e);
            }
            // console.log('user token: ', userToken);
            dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
        }, 1000);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                loginState,
                theme,
                // signIn
                // signOut,
                // toggleTheme
            }}
            {...props}
        />
    );
};

const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error(`useAuth must be used within a AuthProvider`);
    }
    return context;
};

export {AuthProvider, useAuth};
