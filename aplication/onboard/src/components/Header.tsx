// Import libraries for the component
import React from 'react';
import { Text , View } from 'react-native'

interface HeaderProps {
    headerText: string;
}

// Make a component
export const Header = (props: HeaderProps) => {
    const { textStyle, viewStyle } = styles;
    
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
}


const styles:any  = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width:0, height: 2 },
        shadowOpacity: 0.314,
        elevation: 2,
        position: 'relative'
    }
}


