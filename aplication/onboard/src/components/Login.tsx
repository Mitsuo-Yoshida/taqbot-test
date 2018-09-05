import React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, CardSection, Input } from './'
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
                    valid = {this.validEmail}
                    secureTextEntry = {false}
                    placeholder='olar@taqtile.com'
                    Tag={'Email'}
                    value={this.state.email}
                    onChangeText={ email => this.setState({email})}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                    valid = {this.validPassword}
                    secureTextEntry = {true}
                    placeholder='S2'
                    Tag={'Password'}
                    value={this.state.password}
                    onChangeText={ password => this.setState({password})}
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress} buttonTitle='Submit' />
                </CardSection>
                    
                    {this.state.pressed? (    
                        <CardSection>
                            {this.validEmail && this.validPassword ? (
                                <Text>Valid</Text>
                            ) : (
                                <Text>Invalid</Text>
                            )}
                        </CardSection>
                        )
                        :(
                            <Text></Text>
                        )
                    }
            </Card>
        );
    }
};

const styles = {
    loginStyle: {
        flexDirection: 'colunmn',
        justifyContent: 'space-around'
    }
}
export { Login };