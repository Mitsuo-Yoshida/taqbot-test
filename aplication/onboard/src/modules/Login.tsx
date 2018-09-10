import React from 'react';
import { Component } from 'react';
import { Text, AsyncStorage } from 'react-native';
import axios from 'axios';
import { Button, Card, CardSection, Input, Spinner } from '../components'
import { NavigationProps } from './react-native-navigation';

class Login extends Component<NavigationProps> {
    state = { email: '', password: '', pressed: false, error: ''  };
    validEmail = false;
    validPassword = false;
    validLogin = false;
    emailBorderColor = '#ddd';
    passwordBorderColor = '#ddd';
    onButtonPress = () => {

        var regexp = new RegExp('.+@.+\..+');
        this.validEmail = regexp.test(this.state.email);
        if(this.validEmail){
            this.emailBorderColor = '#ddd';
        }
        else{
            this.emailBorderColor = '#ff0000';
        }
        
        this.validPassword = (this.state.password.length >= 4 );
        if(this.validPassword){
            this.passwordBorderColor = '#ddd';
        }
        else{
            this.passwordBorderColor = '#ff0000';
        }

        this.validLogin = this.validEmail && this.validPassword;

        if ( this.validLogin ){
            this.setState({pressed: true});
            axios.post( 
                'https://tq-template-server-sample.herokuapp.com/authenticate',
                {
                    password: this.state.password,
                    email: this.state.email,
                    rememberMe: false
                }
            )
            .then(response => {
                this.setState({error: ''});
                this.setState({pressed: false});
                this.setState({email: ''});
                this.setState({password: ''});
                
                let user = {
                    name: response.data.data.user.name,
                    token: response.data.data.token,
                };
                AsyncStorage.setItem('USER', JSON.stringify(user), () => {});

                this.props.navigator!.push({
                    screen: 'Welcome',
                    title: 'Welcome',
                });
                
            })
            .catch(error => {
                this.setState({error: error.response.data.errors[0].message});
                this.setState({pressed: false});
                this.setState({password: ''});
            })
            ;
        }
        else{
            this.setState({password: ''});
        }
            

    }

    render () {
        return(
            <Card>
                <CardSection>
                    <Input 
                    borderColor= {this.emailBorderColor}
                    secureTextEntry = {false}
                    placeholder='olar@taqtile.com'
                    Tag={'Email'}
                    value={this.state.email}
                    onChangeText={ (email: string) => this.setState({email})}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                    borderColor= {this.passwordBorderColor}
                    secureTextEntry = {true}
                    placeholder='S2'
                    Tag={'Password'}
                    value={this.state.password}
                    onChangeText={ (password: string) => this.setState({password})}
                    />
                </CardSection>

                <CardSection>
                    {(this.state.pressed)? (  
                        <Spinner />
                    ):(
                        <Button onPress={this.onButtonPress} buttonTitle='Submit' />
                    )
                    }
                </CardSection>
                
                <Text style={ styles.invalidStyle }>{this.state.error}</Text>
                
            </Card>
        );
    }
};

const styles:any = {
    invalidStyle:{
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: '#ff0000',
        paddingTop: 10,
        paddingBottom: 10
    },
    validStyle:{
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: '#00ff00',
        paddingTop: 10,
        paddingBottom: 10
    }

}
export { Login };