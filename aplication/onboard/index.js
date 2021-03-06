import React from 'react'
import { AppRegistry, Text, View } from 'react-native'
import { Login } from './src/modules/Login'
import { Welcome } from './src/modules/Welcome'
import { Header } from './src/components'
import { Navigation } from 'react-native-navigation';

const App = () => {
    Navigation.registerComponent('Login', () => Login);
    Navigation.registerComponent('Welcome', () => Welcome);
    Navigation.startSingleScreenApp({
        screen: {
            screen: 'Login',
            title: 'Login'
        },
    });
};

App();
