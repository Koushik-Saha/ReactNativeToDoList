import React from 'react';
import {AuthProvider} from "./context/auth-context";
import Routes from "./Routes";
import { NativeBaseProvider } from "native-base";

const App = () => {
    return (
        <NativeBaseProvider>
        <AuthProvider>
            <Routes />
        </AuthProvider>
        </NativeBaseProvider>
    );
}

export default App;
