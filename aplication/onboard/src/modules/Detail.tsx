import React from 'react';
import { Component } from 'react';
import { Text } from 'react-native';
import axios from 'axios';
import { Card, CardSection, Spinner } from '../components'
import { NavigationProps } from './react-native-navigation';


class Detail extends Component<NavigationProps>{
    state = {error: '', userDetail: {}, loading: false};
    
    
    componentWillMount(){
        const urlBase='https://tq-template-server-sample.herokuapp.com/users/';
        const url=urlBase.concat(this.props.id)
        var user:{token:''};
        var token:'';

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
                    this.setState({error: error.response.data});
                })
            

        
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
    }
}

export { Detail };