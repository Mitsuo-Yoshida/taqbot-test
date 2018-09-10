import React from 'react';
import { Text } from 'react-native';
import { Card, CardSection } from '../components'



interface user {
    id: string;
    name: string;
    role: string;
}
interface userProp {
    user: user;
}



const ItemList = (props: userProp)  => {
    return ( 
        <Card>
            <CardSection>
                <Text style = { styles.userNameStyle } >{props.user.name}</Text>
            </CardSection>
            <CardSection>
                <Text style = { styles.userRoleStyle } >{props.user.role}</Text>
            </CardSection>
        </Card>
    );
};

const styles:any = { 
    userNameStyle:{
        alignSelf: 'center',
        fontSize: 14,
        fontWeight: '600',
        color: '#3090ff',
        paddingTop: 10,
        paddingBottom: 10
    },
    userRoleStyle:{
        alignSelf: 'center',
        fontSize: 10,
        fontWeight: '600',
        color: '#999',
        paddingTop: 10,
        paddingBottom: 10
    }
}

export { ItemList };