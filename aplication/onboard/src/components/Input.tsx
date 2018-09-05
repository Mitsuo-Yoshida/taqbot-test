import React from 'react';
import { Text, View, TextInput } from 'react-native';

interface InputProps {
    Tag: string;
    value: string;
    onChangeText: (value: string) => void; 
    placeholder: string;
    secureTextEntry: boolean;
}

export const Input = (props: InputProps) => {
    const { inputStyle, tagStyle, containerStyle} = styles;
    
    return (
        <View style={containerStyle}>
             
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
        height: 40,
        flex: 1,
        flexDirection: 'row',
        align: 'center'
    }
}

