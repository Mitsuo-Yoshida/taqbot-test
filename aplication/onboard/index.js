import React from 'react'
import { AppRegistry, Text, View } from 'react-native'
import { Login } from './src/modules/Login'
import { Header } from './src/components'

const App = () => {
    return (
        <View>
            <Header headerText={'Login'}/>
            <Login />
        </View>
    );
};

AppRegistry.registerComponent('onboard', () => App);