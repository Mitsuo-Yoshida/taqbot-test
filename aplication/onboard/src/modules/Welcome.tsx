import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import { FlatList, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import { Button, ItemList, Card, CardSection, Spinner } from '../components'
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


class Welcome extends Component<NavigationProps>{
    state = { token: '', data: [], page: 0, pressed:false, error:'' };

    componentWillMount(){
        this.loadMore();
    }

    loadMore() {
        this.setState({ pressed: true });

        axios.get( 
            'https://tq-template-server-sample.herokuapp.com/users', {
                params:{
                    pagination:{
                        page:this.state.page,
                        window:10
                    }
                },
                headers: { Authorization: this.props.token}//this.state.token }
            }
        )
        .then(response => {
            const data = this.state.data;
        
            const newData = response.data.data;

            this.setState({data: [...data, ...newData], page: this.state.page+1, error: '', pressed: false});
            
        })
        .catch(error => {
            this.setState({error: error.response.data.errors[0].message});
            this.setState({pressed: false});
        })
        
    }

    onPress(user:user){
        this.props.navigator!.push({
            screen: 'Detail',
            title: 'Detail',
            passProps: {
                id: user.id,
                token: this.props.token
            }
        });
    }

    renderItem( user:user ){
        return (
        < ItemList 
            user = {user}
            onPress = {() => this.onPress(user)} 
        />
        )
    }
    
    renderFooter( ){
        if (this.state.pressed){
            return (
                <CardSection>    
                    <Spinner/>
                </CardSection>
            )
        }
        else{
            return (
                <CardSection>    
                    <Button onPress={()=>this.loadMore()} buttonTitle='Load More' />
                </CardSection>
            )
        }
    }

    renderHeader( ){
        if (this.state.pressed){
            return (
                <CardSection>    
                    <Spinner/>
                </CardSection>
            )
        }
        else{
            return (
                <CardSection>    
                    <Button onPress={()=>this.loadMore()} buttonTitle='Load More' />
                </CardSection>
            )
        }
    }

    onCreatePress = () => {
        this.props.navigator!.push({
            screen: 'Create',
            title: 'Create',
            passProps: {
                token:this.props.token,
                edition: false
            }
        });
    }

    render(){
        return ( 
            <View>
                <Card>
                    <CardSection>
                        <FlatList 
                            data = {this.state.data}
                            renderItem={({item})=> this.renderItem(item)}
                            keyExtractor={ user => String(user.id)}
                            ListFooterComponent={ () => this.renderFooter() }
                        />
                    </CardSection>    
                </Card>
                <ActionButton
                    buttonColor='#0000ff'
                    onPress={() => this.onCreatePress()}
                />
            </View>
        );
    }
};

const styles:any = {
    nameStyle:{
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: '#0000ff',
        paddingTop: 10,
        paddingBottom: 10
    }
}

export { Welcome };