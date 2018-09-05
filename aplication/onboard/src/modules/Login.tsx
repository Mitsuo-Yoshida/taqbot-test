import React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from '../components'
import { bool } from 'prop-types';

// import TextBox from './TextBox'


class Login extends Component {
    state = { email: '', password: '', pressed: false  };
    validEmail = false;
    validPassword = false;

    onButtonPress = () => {

        var regexp = new RegExp('.+@.+\..+');
        var test = regexp.test(this.state.email);
        if (test) {
            this.validEmail = true;
        }
        else {
            this.validEmail = false;
        }
        if (this.state.password.length >= 4 ){
            this.validPassword = true;
        }
        else{
            this.validPassword = false;
        }

        console.log('Ólaaaaaaa');
        
        this.setState({pressed: true});    

    }

    render () {
        return(
            <Card>
                <CardSection>
                    <Input 
                    secureTextEntry = {false}
                    placeholder='olar@taqtile.com'
                    Tag={'Email'}
                    value={this.state.email}
                    onChangeText={ (email: string) => this.setState({email})}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                    secureTextEntry = {true}
                    placeholder='S2'
                    Tag={'Password'}
                    value={this.state.password}
                    onChangeText={ (password: string) => this.setState({password})}
                    />
                </CardSection>

                <CardSection>
                    {this.state.pressed? (  
                        <Spinner />
                    ):(
                        <Button onPress={this.onButtonPress} buttonTitle='Submit' />
                    )
                    }
                </CardSection>
                
                    {this.state.pressed? (    
                        <View>
                            {this.validEmail && this.validPassword ? (
                                <Text style={ styles.validStyle }>Valid</Text>
                            ) : (
                                <Text style={ styles.invalidStyle }>Invalid</Text>
                            )}
                        </View>
                        )
                        :(
                            <Text></Text>
                        )
                    }
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