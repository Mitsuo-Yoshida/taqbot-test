import React from 'react';
import { Component } from 'react';
import { Text,  StyleSheet } from 'react-native';
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';
import { Button, Card, CardSection, Input, Spinner } from '../components';
import { NavigationProps } from './react-native-navigation';
import {showMessage} from "react-native-flash-message";

interface createProps{
    edition: boolean,
    name: string,
    email: string,
    role: string,
    token: string,
    id: string,
    message: any,
    navigator?: NavigationProps
}

class Create extends Component<createProps> {
    state = { name: '', email: '', password: '', pressed: false, error: '', role: '', isVisible: false };
    validEmail = true;
    validPassword = true;
    validCreate = true;
    validName = true;
    validRole = true;
    buttonName = '';
    method = '';
    emailBorderColor = '#ddd';
    nameBorderColor = '#ddd';
    passwordBorderColor = '#ddd';
    url = '';
    urlBase = 'https://tq-template-server-sample.herokuapp.com/users';
    data = {}
    roles = [
        {
            label:'user', 
            value:'user', 
        },
        {
            label:'admin', 
            value:'admin', 
        }
    ];

    componentWillMount(){
        if(this.props.edition){
            this.setState({ name: this.props.name, email: this.props.email, role: this.props.role });
            this.buttonName = 'Edit';
            this.url = this.urlBase.concat('/'+this.props.id);
        }
        else{
            this.buttonName = 'Create';
            this.url = this.urlBase;
        }
    }

    onCreatePress = () => {
        
        var nameRegexp = new RegExp('^[a-zA-Z]+$');
        var erros = '';
        this.validName = nameRegexp.test(this.state.name);
        
        if(this.validName){
            this.nameBorderColor = '#ddd';
        }
        else{
            this.nameBorderColor = '#ff0000';
            erros = erros.concat('Name must only use letters\n');
        }

        var emailRegexp = new RegExp('.+@.+\..+');
        this.validEmail = emailRegexp.test(this.state.email);
        
        if(this.validEmail){
            this.emailBorderColor = '#ddd';
        }
        else{
            this.emailBorderColor = '#ff0000';
            erros = erros.concat('Email must follow an email format\n');
        }
        
        if(this.props.edition == false){
            this.validPassword = (this.state.password.length >= 7 );

            if(this.validPassword){
                this.passwordBorderColor = '#ddd';
            }
            else{
                this.passwordBorderColor = '#ff0000';
                erros = erros.concat('Password must be at least 4 characters long\n');
            }
        }

        this.validRole = (this.state.role != '');
        if( this.validRole == false){
            erros = erros.concat('Role must be specified\n');
        }

        
        if ( this.validEmail && this.validPassword && this.validRole && this.validName ){
            if(this.props.edition){
                this.data = {
                    email: this.state.email,
                    name: this.state.name,
                    role: this.state.role,
                };
                this.method = 'put';
            }
            else{
                this.data = {
                    password: this.state.password,
                    email: this.state.email,
                    name: this.state.name,
                    role: this.state.role,
                };
                this.method = 'post';
            }

            this.setState({pressed: true});
            axios({
                method: this.method,
                url: this.url,
                data: this.data,
                headers: {'Authorization': this.props.token},
            })
            .then(response => {
                this.setState({error: ''});
                this.setState({pressed: false});
                this.setState({email: '', password: '', name: '', role: ''});

                this.props.navigator!.pop();

                this.props.message({
                    message: 'Success',
                    type: 'success',
                });
                          
            })
            .catch(error => {
                this.setState({error: error.response.data.errors[0].message});
                this.setState({pressed: false});
                this.setState({password: ''});
            });
        }
        else{
            this.setState({password: '', error: erros});
        }
    }

    renderPassword(){
        if(this.props.edition){
            return null;
        }
        else{
            return ( 
                <CardSection>
                    <Input 
                    borderColor= {this.passwordBorderColor}
                    secureTextEntry = {true}
                    placeholder='S2 S2'
                    Tag={'Password'}
                    value={this.state.password}
                    onChangeText={ (password: string) => this.setState({password})}
                    />
                </CardSection>
            )
        }
    }

    render () {
        return(
            <Card>
                <CardSection>
                    <Input 
                    borderColor= {this.nameBorderColor}
                    secureTextEntry = {false}
                    placeholder='DolinhoSeuAmiguinho'
                    Tag={'Name'}
                    value={this.state.name}
                    onChangeText={ (name: string) => this.setState({name})}
                    />
                </CardSection>

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

                {this.renderPassword()}
                
                <RNPickerSelect
                    placeholder={{
                        label: 'Role',
                        value: null,
                    }}
                    items={this.roles}
                    onValueChange={(value:string) => {
                        this.setState({
                            role: value,
                        });
                    }}
                    style={ {...pickerSelectStyles} }
                    value={this.state.role}
                />

                <CardSection>
                    {(this.state.pressed)? (  
                        <Spinner />
                    ):(
                        <Button onPress={this.onCreatePress} buttonTitle={this.buttonName} />
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
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 18,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
});

export { Create };