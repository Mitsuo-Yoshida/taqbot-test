import React from 'react';
import { Text, TouchableOpacity } from 'react-native'

interface buttonProps {
    onPress: () => void;
    buttonTitle: string;
}

export const Button = (props: buttonProps) =>{
    return(
        <TouchableOpacity onPress={props.onPress} style={ styles.buttonStyle }>
            <Text style={ styles.textStyle}>{props.buttonTitle}</Text>
        </TouchableOpacity>
    );
};

const styles: any = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'flex-end',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: '#007aff',
        paddingTop: 10,
        paddingBottom: 10
    }
};
