import React from 'react';
import {AuthProvider} from "./context/auth-context";
import Routes from "./Routes";

const App = () => {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}

export default App;
