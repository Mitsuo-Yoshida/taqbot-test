import React from 'react'
import { AppRegistry, Text, View } from 'react-native'
import { Login, Header } from './src/components'

const App = () => {
    return (
        <View>
            <Header headerText={'Login'}/>
            <Login />
        </View>
    );
};

AppRegistry.registerComponent('onboard', () => App);