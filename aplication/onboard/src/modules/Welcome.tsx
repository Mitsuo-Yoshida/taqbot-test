import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import { FlatList, AsyncStorage } from 'react-native';
import { Button, ItemList, Card, CardSection, Spinner } from '../components'

interface user{
    id: string;
    name: string;
    role: string;
    active: boolean;
    email: string;
    createdAt: string;
    updatedAt: string;
}

class Welcome extends Component{
    state = { token: '', data: [], page: 0, pressed:false, error:'' };

    loggedUser = {
        name:'',
        token:''
    }

    componentWillMount(){
        AsyncStorage.getItem('USER', (err, result) => {
            if (result) {
                this.loggedUser = JSON.parse(result);
                this.setState({token: this.loggedUser.token })
            }
            else {
                this.setState({error: 'Failed fetching user' })
            }
        });
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
                headers: { Authorization: this.state.token }
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

    renderItem( user:user ){
        return (
        < ItemList user = {user} />
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
    render(){
        return ( 
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
        );
    }
};

export { Welcome };