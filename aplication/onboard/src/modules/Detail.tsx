import React from 'react';
import { Component } from 'react';
import { FlatList, AsyncStorage, Text } from 'react-native';
import { Button, ItemList, Card, CardSection, Spinner, } from '../components'
import { NavigationProps } from './react-native-navigation';


interface user{
    id: string;
    name: string;
    role: string;
    active: boolean;
    email: string;
    createdAt: string;
    updatedAt: string;
}


class Detail extends Component<NavigationProps>{
    
    render(){
        console.log(this.props);
        return (
            <Card>
                <CardSection>
                    <Text style = { styles.fieldStyle } >Name:</Text> 
                    <Text style = { styles.contentStyle } >{this.props.user.name}</Text>
                </CardSection>
                <CardSection>
                    <Text style = { styles.fieldStyle } >Email:</Text> 
                    <Text style = { styles.contentStyle } >{this.props.user.email }</Text>
                </CardSection>
                <CardSection>
                    <Text style = { styles.fieldStyle } >Role:</Text> 
                    <Text style = { styles.contentStyle } >{this.props.user.role }</Text>
                </CardSection>
            </Card>
        )
    }
}

  

const styles:any = {
    fieldStyle:{
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: '#0000ff',
        paddingTop: 10,
        paddingBottom: 10,
        flex: 1
    },
    contentStyle:{
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        paddingTop: 10,
        paddingBottom: 10, 
        flex: 3
    }
}

export { Detail };