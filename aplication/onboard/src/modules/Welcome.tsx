import React from 'react';
import { Component } from 'react';
import { Text, AsyncStorage } from 'react-native';
// import { Button, Card, CardSection } from '../components'


class Welcome extends Component{
    state = { name: '' };
    user = {
        name:'',
        token:''
    }
    render(){
        AsyncStorage.getItem('USER', (err, result) => {
            if (result) {
                this.user = JSON.parse(result);
                this.setState({name: this.user.name })
            }
            else {
                this.setState({name: 'Failed fetching user' })
            }
        });
        return ( 
            <Text style = { styles.nameStyle }>{this.state.name}</Text>
        );
    }
};

const styles:any = {
    nameStyle:{
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: '#0000ff',
        paddingTop: 10,
        paddingBottom: 10
    }
}

export { Welcome };