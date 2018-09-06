import React from 'react';
import { Text, View, TextInput } from 'react-native';

interface inputProps {
    Tag: string;
    value: string;
    onChangeText: (value: string) => void; 
    placeholder: string;
    secureTextEntry: boolean;
    borderColor: string;
}

export const Input = (props: inputProps) => {
    const { inputStyle, tagStyle, containerStyle} = styles;
    
    return (
        <View style={ [containerStyle, { borderColor: props.borderColor }] }>
             
            <Text style={tagStyle}>    
                {props.Tag} 
            </Text>

            <TextInput
                secureTextEntry={props.secureTextEntry}
                placeholder={props.placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={props.value}
                onChangeText={props.onChangeText}
            />

        </View>
    );
};


const styles: any = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2 
    },
    tagStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        borderWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
        height: 40,
        flex: 1,
        align: 'center'
    }
}

