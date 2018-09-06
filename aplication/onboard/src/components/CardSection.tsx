import React from 'react';
import { View } from 'react-native';

interface cardSectionProps {
    children: React.ReactNode;
}

export const CardSection = (props: cardSectionProps) => {
    return (
        <View style = {styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles : any = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};
