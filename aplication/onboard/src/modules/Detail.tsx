import React from 'react';
import { Component } from 'react';
import { Text } from 'react-native';
import axios from 'axios';
import { Card, CardSection, Spinner, Button } from '../components';
import { NavigationProps } from './react-native-navigation';
import FlashMessage from "react-native-flash-message";

interface detailProps{
    id: string,
    token: string,
    navigator?: NavigationProps
}

class Detail extends Component<detailProps>{
    state = {
        error: '', 
        userDetail: {
            name: '',
            email: '',
            role: '',
        }, 
        loading: false
    };
    
    message: any;

    componentWillMount(){
        const urlBase='https://tq-template-server-sample.herokuapp.com/users/';
        const url=urlBase.concat(this.props.id);

        this.setState({loading:true});
        axios.get( 
            url, {
                headers: { Authorization: this.props.token }
            }
        )
        .then(response => {
            this.setState({userDetail: response.data.data, loading: false});
        })
        .catch(error => {
            this.setState({error: error.response.data, loading: false});
        })
    }

    onEditPress = () => {
        this.props.navigator!.push({
            screen: 'Create',
            title: 'Edit',
            passProps: {
                token: this.props.token,
                name: this.state.userDetail.name,
                email: this.state.userDetail.email,
                role: this.state.userDetail.role,
                id: this.props.id,
                message: (gah:{message:string, type:string}) => this.message.showMessage(gah),
                edition: true
            }
        });
    }

    render(){
        if(this.state.loading){
            return <Spinner/>
        }
        else{
            return (
                <Card>
                    <CardSection>
                        <Text style = { styles.fieldStyle } >Name:</Text> 
                        <Text style = { styles.contentStyle } >{this.state.userDetail.name}</Text>
                    </CardSection>

                    <CardSection>
                        <Text style = { styles.fieldStyle } >Email:</Text> 
                        <Text style = { styles.contentStyle } >{this.state.userDetail.email }</Text>
                    </CardSection>

                    <CardSection>
                        <Text style = { styles.fieldStyle } >Role:</Text> 
                        <Text style = { styles.contentStyle } >{this.state.userDetail.role }</Text>
                    </CardSection>

                    <CardSection>
                        <Button onPress={this.onEditPress} buttonTitle='Edit' />
                    </CardSection>

                    <Text style={ styles.invalidStyle }>{this.state.error}</Text>

                    <FlashMessage ref={(message:any)=> this.message = message} position='top'/>
                </Card>
            )
        }
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
    },
    invalidStyle:{
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: '#ff0000',
        paddingTop: 10,
        paddingBottom: 10
    }
}

export { Detail };