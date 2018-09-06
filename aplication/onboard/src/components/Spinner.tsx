import React from 'react';
import { View, ActivityIndicator } from 'react-native'

export const Spinner = () => {
    return(
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size = { 'large' } />
        </View>
    );
};

const styles:any = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};